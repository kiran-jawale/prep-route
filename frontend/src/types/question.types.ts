

export type OptionKey = "option1" | "option2" | "option3" | "option4";

export interface Question {
  _id: string;
  topicId: string;
  subTopicId: string;
  type: string;
  question: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  correctOption: OptionKey;
  difficulty: string;
  explanation: string;
}

export interface BulkCreateQuestionsPayload {
  testId: string;
  questions: Omit<Question, "_id">[];
}
