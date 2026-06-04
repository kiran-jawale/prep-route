import { Question } from "../models/question.model.js";
import { Test } from "../models/test.model.js";
import { withMetrics } from "../utils/metricsLogger.js";

class QuestionService {
  async bulkCreateQuestions(questions) {
    return await withMetrics("BULK_CREATE_QUESTIONS", async () => {
      const createdQuestions = await Question.insertMany(questions);

      const groupedTests = {};

      createdQuestions.forEach((question) => {
        if (!groupedTests[question.testId]) {
          groupedTests[question.testId] = [];
        }

        groupedTests[question.testId].push(question._id);
      });

      for (const testId in groupedTests) {
        await Test.findByIdAndUpdate(testId, {
          $push: {
            questions: {
              $each: groupedTests[testId],
            },
          },
        });
      }

      return createdQuestions;
    });
  }
}

export default new QuestionService();
