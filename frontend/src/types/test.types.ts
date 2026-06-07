

export type TestStatus = "draft" | "live" | "expired";

export interface Test {
  
  _id: string;
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

  publishMode: string;
  scheduledAt: string | null;
  publishedAt: string | null;
  availableUntil: string | null;
  status: TestStatus;
}
