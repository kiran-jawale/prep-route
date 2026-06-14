import { useEffect, useMemo, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { rememberTest } from "../../state/slices/rememberSlice";
import { getRememberedTest } from "../../utils/rememberTest";
import type { AppDispatch } from "../../state/store";

import { useTest } from "../../contexts/testContext";

import { useDom } from "../../contexts/domContext";

import testService from "../../services/test.service";
import questionService from "../../services/question.service";

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

    topics,

    subTopics,

    activeQuestion,
    setActiveQuestion,

    markQuestionCompleted,

    resetTest,
  } = useTest();

  const [loading, setLoading] = useState(false);

  const auth = useSelector((state: any) => state.auth);

  const restoreOrLoad = async () => {
    if (test && test._id === id) {
      return;
    }

    const remembered = getRememberedTest(auth.user._id, id as string);

    if (remembered && remembered.test && remembered.test._id === id) {
      setTest(remembered.test);

      setQuestions(remembered.questions || []);

      return;
    }

    await loadInitial();
  };

  useEffect(() => {
    if (!id) {
      return;
    }

    if (test && test._id !== id) {
      resetTest();
    }

    restoreOrLoad();
  }, [id]);

  const loadInitial = async () => {
    try {
      resetTest();

      const response = await testService.getById(id as string);

      const loadedTest = response.data.data;

      setTest(loadedTest);

      setQuestions(loadedTest.questions || []);
    } catch {
      addToast("Unable to load test", "error");
    }
  };

  const currentIndex = (activeQuestion || 1) - 1;

  const currentQuestion = useMemo(() => {
    return (
      questions[currentIndex] ||
      createEmptyQuestion(
        questions[currentIndex - 1]?.topicId || "",
        questions[currentIndex - 1]?.subTopicId || ""
      )
    );
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
        userId: auth.user._id,

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

      const finalQuestions = questions.map((question) => ({
        ...question,
        topicId:
          question.topicId ||
          (Array.isArray(test?.topics)
            ? typeof test.topics[0] === "string"
              ? test.topics[0]
              : test.topics[0]?._id
            : ""),
        subTopicId:
          question.subTopicId ||
          (Array.isArray(test?.subTopics)
            ? typeof test.subTopics[0] === "string"
              ? test.subTopics[0]
              : (test.subTopics[0] as any)?._id
            : ""),
      }));

      finalQuestions.forEach((question) => questionSchema.parse(question));

      const response = await questionService.bulkCreate({
        testId: id,
        questions: finalQuestions,
      });

      navigate(`/tests/${id}/publish`);
    } catch (err) {
      console.log(err);
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
