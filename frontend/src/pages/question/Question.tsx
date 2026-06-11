import { useEffect, useMemo, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { rememberTest } from "../../state/slices/rememberSlice";

import type { AppDispatch } from "../../state/store";

import { useTest } from "../../contexts/testContext";

import { useDom } from "../../contexts/domContext";

import testService from "../../services/test.service";
import topicService from "../../services/topic.service";
import subTopicService from "../../services/subTopic.service";
import questionService from "../../services/question.service";

import type { Topic } from "../../types/topic.types";
import type { SubTopic } from "../../types/subTopic.types";

import TestSummaryCard from "../../components/shared/TestSummaryCard";

import { questionSchema } from "../../utils/validation";

import { createEmptyQuestion } from "../../utils/questionFactory";

import QuestionHeader from "./parts/QuestionHeader";
import QuestionEditor from "./parts/QuestionEditor";
import QuestionOptions from "./parts/QuestionOptions";
import QuestionExplanation from "./parts/QuestionExplanation";
import QuestionSettings from "./parts/QuestionSettings";
import QuestionActions from "./parts/QuestionsActions";

export default function Question() {
  const navigate = useNavigate();

  const dispatch = useDispatch<AppDispatch>();

  const { id } = useParams();

  const { addToast } = useDom();

  const {
    test,
    setTest,

    questions,
    setQuestions,

    activeQuestion,
    setActiveQuestion,

    markQuestionCompleted,

    resetTest,
  } = useTest();

  const [loading, setLoading] = useState(false);

  const [topics, setTopics] = useState<Topic[]>([]);

  const [subTopics, setSubTopics] = useState<SubTopic[]>([]);

  const auth = useSelector((state: any) => state.auth);

  useEffect(() => {
    loadInitial();

    return () => {
      resetTest();
    };
  }, [id]);

  const loadInitial = async () => {
    try {
      resetTest();

      const response = await testService.getById(id as string);

      const loadedTest = response.data.data;
      console.log("Loaded Test", JSON.stringify(loadedTest, null, 2));

      setTest(loadedTest);

      setQuestions(loadedTest.questions || []);

      const subjectId =
        typeof loadedTest.subjectId === "string"
          ? loadedTest.subjectId
          : loadedTest.subjectId._id;

      const topicsResponse = await topicService.getBySubject(subjectId);

      setTopics(topicsResponse.data.data);

      const topicIds = loadedTest.topics.map((topic: any) =>
        typeof topic === "string" ? topic : topic._id
      );

      if (topicIds.length) {
        const responses = await Promise.all(
          topicIds.map((topicId: string) => subTopicService.getByTopic(topicId))
        );

        const allSubTopics = responses.flatMap(
          (response) => response.data.data
        );

        setSubTopics(allSubTopics);
      }
    } catch {
      addToast("Unable to load test", "error");
    }
  };

  const currentIndex = (activeQuestion || 1) - 1;

  const currentQuestion = useMemo(() => {
    return questions[currentIndex] || createEmptyQuestion();
  }, [questions, currentIndex]);

  const updateQuestion = (field: string, value: string) => {
    const copy = [...questions];

    copy[currentIndex] = {
      ...currentQuestion,

      [field]: value,
    };

    setQuestions(copy);

    const completed =
      copy[currentIndex]?.question &&
      copy[currentIndex]?.option1 &&
      copy[currentIndex]?.option2 &&
      copy[currentIndex]?.option3 &&
      copy[currentIndex]?.option4;

    if (completed) {
      markQuestionCompleted(currentIndex + 1);
    }
  };

  const saveDraft = () => {
    if (!test) {
      return;
    }

    dispatch(
      rememberTest({
        userId: auth.user?._id || "",

        testId: test._id,

        lastPage: "questions",

        test,

        questions,

        updatedAt: new Date().toISOString(),
      })
    );

    addToast("Draft Saved");
  };

  const submitQuestions = async () => {
    try {
      setLoading(true);

      questions.forEach((question) => questionSchema.parse(question));

      await questionService.bulkCreate({
        testId: id,

        questions,
      });

      navigate(`/tests/${id}/publish`);
    } catch {
      addToast("Invalid Question Data", "error");
    } finally {
      setLoading(false);
    }
  };

  if (!test) {
    return null;
  }

  return (
    <div className="space-y-8 p-8">
      <TestSummaryCard test={test} />

      <QuestionHeader
        current={activeQuestion || 1}
        total={test.totalQuestions}
        onReset={() => updateQuestion("question", "")}
      />

      <QuestionEditor
        value={currentQuestion.question}
        onChange={(value) => updateQuestion("question", value)}
      />

      <QuestionOptions question={currentQuestion} onChange={updateQuestion} />

      <QuestionExplanation
        value={currentQuestion.explanation}
        onChange={(value) => updateQuestion("explanation", value)}
      />

      <QuestionSettings
        difficulty={currentQuestion.difficulty}
        topicId={currentQuestion.topicId}
        subTopicId={currentQuestion.subTopicId}
        topics={topics}
        subTopics={subTopics}
        onChange={updateQuestion}
      />

      <QuestionActions
        currentQuestion={activeQuestion || 1}
        totalQuestions={test.totalQuestions}
        loading={loading}
        onPrevious={() =>
          setActiveQuestion(Math.max(1, (activeQuestion || 1) - 1))
        }
        onNext={() =>
          setActiveQuestion(
            Math.min(test.totalQuestions, (activeQuestion || 1) + 1)
          )
        }
        onSaveDraft={saveDraft}
        onSubmit={submitQuestions}
      />
    </div>
  );
}
