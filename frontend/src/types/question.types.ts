export type OptionKey = "option1" | "option2" | "option3" | "option4";

export interface Question {
  _id?: string;
  testId?: string;
  subjectId?: string;
  topicId: string;
  subTopicId: string;
  type: "mcq";
  question: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  correctOption: OptionKey;
  difficulty: "easy" | "medium" | "difficult";
  explanation: string;
  createdAt?: string;
  updatedAt?: string;
}
