export type TestStatus = "draft" | "live" | "scheduled" | "expired";

export type TestCategory = "chapterWise" | "pyq" | "mockTest";

export interface TestSubject {
  _id: string;
  name: string;
}

export interface TestTopic {
  _id: string;
  name: string;
}

export interface Test {
  _id: string;
  name: string;
  category: TestCategory;
  subjectId: string | TestSubject;
  topics: string[] | TestTopic[];
  subTopics: string[];
  difficulty: string;
  correctMarks: number;
  wrongMarks: number;
  unattemptMarks: number;
  totalTime: number;
  totalMarks: number;
  totalQuestions: number;
  publishMode: "immediate" | "scheduled";
  scheduledAt: string | null;
  publishedAt: string | null;
  availableUntil: string | null;
  status: TestStatus;
  createdAt?: string;
  updatedAt?: string;
}

export interface CreateTestPayload {
  name: string;
  category: string;
  subjectId: string;
  topics: string[];
  subTopics: string[];
  difficulty: string;
  correctMarks: number;
  wrongMarks: number;
  unattemptMarks: number;
  totalTime: number;
  totalMarks: number;
  totalQuestions: number;
}