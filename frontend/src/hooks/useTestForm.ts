/**
 * useTestForm Hook
 *
 * Handles test form initialization, loading and updates.
 *
 * Props:
 * @param testId Optional test identifier used during edit workflow.
 *
 * Purpose:
 * Centralizes create/edit test form state management.
 */

import { useEffect, useState } from "react";

import subjectService from "../services/subject.service";
import topicService from "../services/topic.service";
import subTopicService from "../services/subTopic.service";
import testService from "../services/test.service";

import type { Subject } from "../types/subject.types";
import type { Topic } from "../types/topic.types";
import type { SubTopic } from "../types/subTopic.types";

interface Props {
  testId?: string | null;
}

export default function useTestForm({ testId }: Props) {
  const [loading, setLoading] = useState(false);

  const [initialLoading, setInitialLoading] = useState(true);

  const [subjects, setSubjects] = useState<Subject[]>([]);

  const [topics, setTopics] = useState<Topic[]>([]);

  const [subTopics, setSubTopics] = useState<SubTopic[]>([]);

  const [form, setForm] = useState({
    category: "chapterWise",
    name: "",
    subjectId: "",
    topics: [] as string[],
    subTopics: [] as string[],
    difficulty: "easy",
    correctMarks: 5,
    wrongMarks: -1,
    unattemptMarks: 0,
    totalTime: 60,
    totalMarks: 250,
    totalQuestions: 50,
  });

  useEffect(() => {
    initialize();
  }, []);

  useEffect(() => {
    if (form.subjectId) {
      loadTopics(form.subjectId);
    }
  }, [form.subjectId]);

  useEffect(() => {
    if (form.topics.length) {
      loadSubTopics(form.topics[0]);
    }
  }, [form.topics]);

  const initialize = async () => {
    try {
      const subjectResponse = await subjectService.getAll();

      setSubjects(subjectResponse?.data?.data ?? []);

      if (!testId) {
        return;
      }

      const testResponse = await testService.getById(testId);

      const test = testResponse?.data?.data;

      if (!test) {
        return;
      }

      setForm({
        category: test.category,
        name: test.name,
        subjectId:
          typeof test.subjectId === "string"
            ? test.subjectId
            : test.subjectId._id,
        topics: (test.topics ?? []).map((topic: any) =>
          typeof topic === "string" ? topic : topic._id
        ),
        subTopics: test.subTopics ?? [],
        difficulty: test.difficulty,
        correctMarks: test.correctMarks,
        wrongMarks: test.wrongMarks,
        unattemptMarks: test.unattemptMarks,
        totalTime: test.totalTime,
        totalMarks: test.totalMarks,
        totalQuestions: test.totalQuestions,
      });
    } finally {
      setInitialLoading(false);
    }
  };

  const loadTopics = async (subjectId: string) => {
    const response = await topicService.getBySubject(subjectId);

    setTopics(response?.data?.data ?? []);
  };

  const loadSubTopics = async (topicId: string) => {
    const response = await subTopicService.getByTopic(topicId);

    setSubTopics(response?.data?.data ?? []);
  };

  const updateField = (field: string, value: any) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return {
    form,
    updateField,
    loading,
    setLoading,
    initialLoading,
    subjects,
    topics,
    subTopics,
  };
}
