import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import type { Test } from "../types/test.types";

interface TestContextType {
  test: Test | null;
  setTest: (test: Test | null) => void;

  activeQuestion: number | null;
  setActiveQuestion: (question: number) => void;

  completedQuestions: number[];
  setCompletedQuestions: (
    questions: number[]
  ) => void;

  markQuestionCompleted: (
    questionNumber: number
  ) => void;

  resetTest: () => void;
}

const TestContext =
  createContext<TestContextType | null>(
    null
  );

export const TestProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [test, setTest] =
    useState<Test | null>(null);

  const [
    activeQuestion,
    setActiveQuestion,
  ] = useState<number | null>(null);

  const [
    completedQuestions,
    setCompletedQuestions,
  ] = useState<number[]>([]);

  const markQuestionCompleted = (
    questionNumber: number
  ) => {
    setCompletedQuestions((prev) => {
      if (
        prev.includes(
          questionNumber
        )
      ) {
        return prev;
      }

      return [
        ...prev,
        questionNumber,
      ];
    });
  };

  const resetTest = () => {
    setTest(null);
    setActiveQuestion(null);
    setCompletedQuestions([]);
  };

  return (
    <TestContext.Provider
      value={{
        test,
        setTest,

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
  const context =
    useContext(TestContext);

  if (!context) {
    throw new Error(
      "useTest must be used inside TestProvider"
    );
  }

  return context;
};