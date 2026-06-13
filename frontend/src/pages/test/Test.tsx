import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Breadcrumb from "../../components/shared/BreadCrumb";
import Input from "../../components/ui/Input";
import Select from "../../components/ui/Select";
import MultiSelect from "../../components/ui/MultiSelect";

import TestCategoryTabs from "./parts/TestCategoryTabs";
import TestDifficultySection from "./parts/TestDifficultySection";
import TestMarksSection from "./parts/TestMarksSection";
import TestActions from "./parts/TestActions";
import TestSkeleton from "./parts/TestSkeleton";

import subjectService from "../../services/subject.service";
import topicService from "../../services/topic.service";
import subTopicService from "../../services/subTopic.service";
import testService from "../../services/test.service";

import { useDom } from "../../contexts/domContext";
import { useTest } from "../../contexts/testContext";

import type { SubTopic } from "../../types/subTopic.types";
import type { Subject } from "../../types/subject.types";
import type { Topic } from "../../types/topic.types";

export default function Test() {
  const navigate = useNavigate();
  const { id } = useParams();
  const testId = id;

  const { addToast } = useDom();
  const {
    setTest,
    test: currentTest,
    resetTest,
    subjects,
    setSubjects,

    topics,
    setTopics,
    setQuestions,
    subTopics,
    setSubTopics,

    setActiveQuestion,
  } = useTest();

  const [loading, setLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);
  const [subTopicTopicMap, setSubTopicTopicMap] = useState<
    Record<string, string>
  >({});

  const [form, setForm] = useState({
    category: "chapterWise",
    name: "",
    subjectId: "",
    topics: [] as string[],
    subTopics: [] as string[],
    difficulty: "easy",
    correctMarks: 1,
    wrongMarks: -1,
    unattemptMarks: 0,
    totalTime: 60,
    totalQuestions: 10,
    totalMarks: 1 * 10,
  });

  useEffect(() => {
    loadInitial();
  }, []);

  useEffect(() => {
    if (!form.subjectId) {
      setTopics([]);
      setSubTopics([]);
      return;
    }

    loadTopics();
  }, [form.subjectId]);

  useEffect(() => {
    loadSubTopics(form.topics);
  }, [form.topics]);

  const loadInitial = async () => {
    try {
      const subjectResponse = await subjectService.getAll();

      setSubjects(subjectResponse.data.data);

      if (!testId) {
        return;
      }

      const testResponse = await testService.getById(testId);
      const test = testResponse.data.data;
      if (currentTest && currentTest._id !== test._id) {
        resetTest();
      }

      const subjectId =
        typeof test.subjectId === "string"
          ? test.subjectId
          : test.subjectId._id;

      const topicIds: string[] = test.topics.map((topic: Topic) =>
        typeof topic === "string" ? topic : topic._id
      );

      const topicsResponse = await topicService.getBySubject(subjectId);

      setTopics(topicsResponse.data.data);

      if (topicIds.length) {
        const responses = await Promise.all(
          topicIds.map((topicId: string) => subTopicService.getByTopic(topicId))
        );

        const allSubTopics = responses.flatMap(
          (response) => response.data.data
        );

        const mapping: Record<string, string> = {};

        responses.forEach((response, index) => {
          response.data.data.forEach((subTopic: SubTopic) => {
            mapping[subTopic._id] = topicIds[index];
          });
        });

        setSubTopicTopicMap(mapping);

        setSubTopics(allSubTopics);
      }

      setForm({
        category: test.category,
        name: test.name,
        subjectId,
        topics: topicIds,
        subTopics: test.subTopics.map((subTopic: string | { _id: string }) =>
          typeof subTopic === "string" ? subTopic : subTopic._id
        ),
        difficulty: test.difficulty,
        correctMarks: test.correctMarks,
        wrongMarks: test.wrongMarks,
        unattemptMarks: test.unattemptMarks,
        totalTime: test.totalTime,
        totalMarks: Number(test.correctMarks) * Number(test.totalQuestions),
        totalQuestions: test.totalQuestions,
      });
    } finally {
      setInitialLoading(false);
    }
  };

  const loadTopics = async () => {
    const response = await topicService.getBySubject(form.subjectId);

    setTopics(response.data.data);
  };

  const loadSubTopics = async (topicIds: string[]) => {
    if (!topicIds.length) {
      setSubTopics([]);
      return;
    }

    const responses = await Promise.all(
      topicIds.map((topicId: string) => subTopicService.getByTopic(topicId))
    );
    const allSubTopics = responses.flatMap((response) => response.data.data);
    const mapping: Record<string, string> = {};
    responses.forEach((response, index) => {
      response.data.data.forEach((subTopic: SubTopic) => {
        mapping[subTopic._id] = topicIds[index];
      });
    });

    setSubTopicTopicMap(mapping);
    setSubTopics(allSubTopics);
  };

  const handleChange = (field: string, value: unknown) => {
    if (field === "subjectId") {
      setTopics([]);

      setSubTopics([]);

      setSubTopicTopicMap({});

      setForm((prev) => ({
        ...prev,
        subjectId: value as string,
        topics: [],
        subTopics: [],
      }));

      return;
    }

    if (field === "topics") {
      const nextTopics = value as string[];

      setForm((prev) => {
        const filteredSubTopics = prev.subTopics.filter((subTopicId) => {
          const parentTopicId = subTopicTopicMap[subTopicId];

          return nextTopics.includes(parentTopicId);
        });

        return {
          ...prev,
          topics: nextTopics,
          subTopics: filteredSubTopics,
        };
      });

      return;
    }
    setForm((prev) => {
      const nextForm = {
        ...prev,
        [field]: value,
      };

      if (field === "correctMarks" || field === "totalQuestions") {
        nextForm.totalMarks =
          Number(nextForm.correctMarks) * Number(nextForm.totalQuestions);
      }

      return nextForm;
    });
  };

const handleSubmit = async (e: any) => {
  e.preventDefault();

  try {
    setLoading(true);

    if (testId) {
      const response = await testService.update(
        testId,
        form
      );

      const updatedTest =
        response.data.data;

      const fullResponse =
        await testService.getById(
          updatedTest._id
        );

      const populatedTest =
        fullResponse.data.data;

      resetTest();

      setTest(populatedTest);

      setQuestions([]);

      setActiveQuestion(1);

      addToast(
        "Test updated successfully"
      );

      navigate(
        `/tests/${populatedTest._id}/questions`
      );

      return;
    }

    const response =
      await testService.create(form);

    const createdTest =
      response.data.data;

    const fullResponse =
      await testService.getById(
        createdTest._id
      );

    const populatedTest =
      fullResponse.data.data;

    resetTest();

    setTest(populatedTest);

    setQuestions([]);

    setActiveQuestion(1);

    addToast(
      "Test created successfully"
    );

    navigate(
      `/tests/${populatedTest._id}/questions`
    );
  } catch {
    addToast(
      "Unable to save test",
      "error"
    );
  } finally {
    setLoading(false);
  }
};

  if (initialLoading) {
    return (
      <div className="p-8">
        <TestSkeleton />
      </div>
    );
  }

  return (
    <div className="space-y-8 p-8">
      <Breadcrumb
        items={["Test Creation", testId ? "Edit Test" : "Create Test"]}
      />

      <form onSubmit={handleSubmit} className="space-y-10">
        <TestCategoryTabs
          value={form.category}
          onChange={(value) => handleChange("category", value)}
        />

        <div className="grid grid-cols-2 gap-10">
          <div>
            <label className="mb-3 block">Subject</label>

            <Select
              value={form.subjectId}
              onChange={(value) => handleChange("subjectId", value)}
              options={subjects.map((subject: Subject) => ({
                label: subject.name,
                value: subject._id,
              }))}
            />
          </div>

          <div>
            <label className="mb-3 block">Name of Test</label>

            <Input
              value={form.name}
              onChange={(e) => handleChange("name", e.target.value)}
            />
          </div>

          <div>
            <label className="mb-3 block">Topic</label>

            <MultiSelect
              values={form.topics}
              onChange={(value) => handleChange("topics", value)}
              options={topics.map((topic) => ({
                label: topic.name,
                value: topic._id,
              }))}
            />
          </div>

          <div>
            <label className="mb-3 block">Sub Topic</label>

            <MultiSelect
              values={form.subTopics}
              onChange={(value) => handleChange("subTopics", value)}
              options={subTopics.map((subTopic: SubTopic) => ({
                label: subTopic.name,
                value: subTopic._id,
              }))}
            />
          </div>

          <div>
            <label className="mb-3 block">Duration (Minutes)</label>

            <Input
              type="number"
              value={form.totalTime}
              onChange={(e) =>
                handleChange("totalTime", Number(e.target.value))
              }
            />
          </div>

          <TestDifficultySection
            value={form.difficulty}
            onChange={(value) => handleChange("difficulty", value)}
          />
        </div>

        <TestMarksSection
          correctMarks={form.correctMarks}
          wrongMarks={form.wrongMarks}
          unattemptMarks={form.unattemptMarks}
          totalQuestions={form.totalQuestions}
          totalMarks={form.totalMarks}
          onChange={handleChange}
        />

        <TestActions
          loading={loading}
          onCancel={() => navigate("/dashboard")}
        />
      </form>
    </div>
  );
}
