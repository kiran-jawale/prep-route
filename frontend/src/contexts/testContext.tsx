import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

import type { Question } from "../types/question.types";
import type { Test } from "../types/test.types";

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
}

const TestContext = createContext<TestContextType | null>(null);

export const TestProvider = ({ children }: { children: ReactNode }) => {
  const [test, setTest] = useState<Test | null>(null);

  const [questions, setQuestions] = useState<Question[]>([]);

  const [activeQuestion, setActiveQuestion] = useState<number | null>(1);

  const [completedQuestions, setCompletedQuestions] = useState<number[]>([]);

  const markQuestionCompleted = (questionNumber: number) => {
    setCompletedQuestions((prev) => {
      if (prev.includes(questionNumber)) {
        return prev;
      }

      return [...prev, questionNumber];
    });
  };

  const resetTest = () => {
    setTest(null);
    setQuestions([]);
    setCompletedQuestions([]);
    setActiveQuestion(1);
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
