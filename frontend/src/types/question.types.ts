// ============================================================================
// Question Types - Typing for MCQ (Multiple Choice Questions)
// ============================================================================

// Valid option identifiers - more type-safe than storing "option1" strings everywhere
export type OptionKey = "option1" | "option2" | "option3" | "option4";

// Single question option
export interface QuestionOption {
  key: OptionKey;    // Which option (1-4)
  text: string;      // Option content
}

// Question interface - represents a multiple-choice question
export interface Question {
  _id: string;
  question: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  correctOption: OptionKey; // Type-safe instead of string
}

// Request to create question(s)
export type CreateQuestionPayload = Omit<Question, "_id">;

// Bulk create multiple questions
export interface BulkCreateQuestionsPayload {
  questions: CreateQuestionPayload[];
  testId: string;
}

// Response from question endpoint
export interface QuestionResponse {
  success: boolean;
  message: string;
  data: Question | Question[];
}

// Type guard function - helps TypeScript understand data structure
export const isQuestion = (data: unknown): data is Question => {
  return (
    typeof data === "object" &&
    data !== null &&
    "_id" in data &&
    "question" in data &&
    "correctOption" in data
  );
};