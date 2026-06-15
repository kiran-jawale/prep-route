import { Question } from "../models/question.model.js";
import { Test } from "../models/test.model.js";

import ApiError from "../utils/apiError.js";
import { withMetrics } from "../utils/metricsLogger.js";

class QuestionService {
  async saveQuestions(testId, questions) {
    return await withMetrics("SAVE_QUESTIONS", async () => {
      const test = await Test.findById(testId).select("subjectId");

      if (!test) {
        throw new ApiError(404, "Test not found.");
      }

      const questionsToInsert = questions.map((question) => ({
        testId,
        subjectId: test.subjectId,

      topicId: question.topicId || null,

subTopicId:
  question.subTopicId || null,

        type: question.type,
        question: question.question,

        option1: question.option1,
        option2: question.option2,
        option3: question.option3,
        option4: question.option4,

        correctOption: question.correctOption,

        difficulty: question.difficulty,

        explanation: question.explanation,
      }));

      await Question.deleteMany({
        testId,
      });

      const createdQuestions = await Question.insertMany(questionsToInsert);

      const questionIds = createdQuestions.map((question) => question._id);

      await Test.findByIdAndUpdate(testId, {
        questions: questionIds,
        totalQuestions: createdQuestions.length,
      });

      return createdQuestions;
    });
  }
}

export default new QuestionService();
