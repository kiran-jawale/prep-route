import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import type { Test } from "../types/test.types";

interface TestContextType {
  test: Test | null;
  setTest: (test: Test | null) => void;
  activeQuestion: number | null;
  setActiveQuestion: (question: number) => void;
  resetTest: () => void;
}

const TestContext = createContext<TestContextType | null>(null);

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

  const resetTest = () => {
    setTest(null);
    setActiveQuestion(null);
  };

  return (
    <TestContext.Provider
      value={{
        test,
        setTest,
        activeQuestion,
        setActiveQuestion,
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