import type { Question } from "../types/question.types";

export const createEmptyQuestion = (
  topicId = "",
  subTopicId = ""
): Question => ({
  type: "mcq",

  topicId,

  subTopicId,

  question: "",

  option1: "",

  option2: "",

  option3: "",

  option4: "",

  correctOption: "option1",

  difficulty: "easy",

  explanation: "",
});
