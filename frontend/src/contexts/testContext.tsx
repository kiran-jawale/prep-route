import { createContext, useContext, useState } from "react";

import type { ReactNode } from "react";

interface CurrentTest {
  _id?: string;

  name: string;

  category: string;

  subjectId: string;

  topics: string[];

  subTopics: string[];

  difficulty: string;

  totalQuestions: number;

  totalMarks: number;

  totalTime: number;

  status?: string;

  publishMode?: string;

  scheduledAt?: string | null;

  availableUntil?: string | null;
}

interface TestContextType {
  test: CurrentTest | null;

  setTest: (test: CurrentTest | null) => void;
}

const TestContext = createContext<TestContextType | null>(null);

export const TestProvider = ({ children }: { children: ReactNode }) => {
  const [test, setTest] = useState<CurrentTest | null>(null);

  return (
    <TestContext.Provider
      value={{
        test,
        setTest,
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
