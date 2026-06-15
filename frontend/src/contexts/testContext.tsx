

/**
 * Test Context
 *
 * Manages the complete test creation workflow state.
 *
 * Features:
 * - Current test
 * - Questions
 * - Subjects
 * - Topics
 * - SubTopics
 * - Active question tracking
 * - Completion tracking
 * - Workflow persistence
 *
 * Purpose:
 * Acts as the primary state container for the test workflow.
 */


import { createContext, useEffect, useContext, useState } from "react";
import type { ReactNode } from "react";

import {
  getCurrentTest,
  saveCurrentTest,
  clearCurrentTest,
} from "../utils/currentTest";
import type { Question } from "../types/question.types";
import type { Test } from "../types/test.types";
import type { Subject } from "../types/subject.types";
import type { Topic } from "../types/topic.types";
import type { SubTopic } from "../types/subTopic.types";

interface TestContextType {
  test: Test | null;
  setTest: (test: Test | null) => void;

  questions: Question[];
  setQuestions: (questions: Question[]) => void;

  activeQuestion: number | null;
  setActiveQuestion: (question: number) => void;

  completedQuestions: number[];
  setCompletedQuestions: (questions: number[]) => void;

  markQuestionCompleted: (questionNumber: number) => void;

  resetTest: () => void;
  subjects: Subject[];
  setSubjects: (subjects: Subject[]) => void;

  topics: Topic[];
  setTopics: (topics: Topic[]) => void;

  subTopics: SubTopic[];
  setSubTopics: (subTopics: SubTopic[]) => void;
}

const TestContext = createContext<TestContextType | null>(null);

export const TestProvider = ({ children }: { children: ReactNode }) => {
  const persisted = getCurrentTest();

  const [test, setTest] = useState<Test | null>(persisted?.test || null);

  const [questions, setQuestions] = useState<Question[]>(
    persisted?.questions || []
  );

  const [activeQuestion, setActiveQuestion] = useState<number>(
    persisted?.activeQuestion || 1
  );

  const [completedQuestions, setCompletedQuestions] = useState<number[]>(
    persisted?.completedQuestions || []
  );
  const [topics, setTopics] = useState<Topic[]>(persisted?.topics || []);

  const [subTopics, setSubTopics] = useState<SubTopic[]>(
    persisted?.subTopics || []
  );

  const [subjects, setSubjects] = useState<Subject[]>(
    persisted?.subjects || []
  );

  const markQuestionCompleted = (questionNumber: number) => {
    setCompletedQuestions((prev) => {
      if (prev.includes(questionNumber)) {
        return prev;
      }

      return [...prev, questionNumber];
    });
  };

  useEffect(() => {
    saveCurrentTest({
      test,
      questions,
      subjects,
      topics,
      subTopics,
      activeQuestion,
      completedQuestions,
      updatedAt: new Date().toISOString(),
    });
  }, [
    test,
    questions,
    subjects,
    topics,
    subTopics,
    activeQuestion,
    completedQuestions,
  ]);
const resetTest = () => {
  setTest(null);
  setQuestions([]);
  setSubjects([]);
  setTopics([]);
  setSubTopics([]);
  setCompletedQuestions([]);
  setActiveQuestion(1);
  clearCurrentTest();
};

  return (
    <TestContext.Provider
      value={{
        test,
        setTest,

        questions,
        setQuestions,

        activeQuestion,
        setActiveQuestion,

        completedQuestions,
        setCompletedQuestions,

        markQuestionCompleted,

        subjects,
        topics,
        subTopics,
        setSubjects,

        setTopics,

        setSubTopics,

        resetTest,
      }}
    >
      {children}
    </TestContext.Provider>
  );
};

export const useTest = () => {
  const context = useContext(TestContext);

  if (!context) {
    throw new Error("useTest must be used inside TestProvider");
  }

  return context;
};
