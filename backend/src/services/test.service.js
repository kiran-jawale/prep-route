import { Test } from "../models/test.model.js";
import { withMetrics } from "../utils/metricsLogger.js";
import ApiError from "../utils/apiError.js";
import { UX_ERRORS } from "../constants/uxErrors.js";
import { syncTestStatuses } from "./helpers/testSync.service.js";

class TestService {
  async getAllTests(userId) {
    return await withMetrics("GET_ALL_TESTS", async () => {
      await syncTestStatuses();

      return await Test.find({ userId })
        .populate("subjectId", "name")
        .populate("topics", "name")
        .sort({ createdAt: -1 });
    });
  }

  async getTestById(testId, userId) {
    return await withMetrics("GET_TEST_BY_ID", async () => {
      await syncTestStatuses();
      const test = await Test.findOne({
        _id: testId,
        userId,
      })
        .populate("subjectId", "name")
        .populate("topics", "name")
        .populate("subTopics", "name")
        .populate("questions");

      if (!test) {
        throw new ApiError(404, UX_ERRORS.TEST.NOT_FOUND);
      }

      return test;
    });
  }

  async createTest(userId, data) {
    return await withMetrics("CREATE_TEST", async () => {
      const now = new Date();

      let status = "draft";
      let publishedAt = null;
      let scheduledAt = null;
      let availableUntil = null;

      if (data.publishMode === "immediate") {
        status = "live";
        publishedAt = now;
      }

      if (data.publishMode === "scheduled") {
        scheduledAt = new Date(data.scheduledAt);
      }

      if (data.availabilityDays) {
        availableUntil = new Date(
          now.getTime() + data.availabilityDays * 24 * 60 * 60 * 1000
        );
      }

      return await Test.create({
        userId,
        name: data.name,
        category: data.category,
        subjectId: data.subject,
        topics: data.topics || [],
        subTopics: data.subTopics || [],
        correctMarks: data.correctMarks,
        wrongMarks: data.wrongMarks,
        unattemptMarks: data.unattemptMarks,
        difficulty: data.difficulty,
        totalTime: data.totalTime || 0,
        totalMarks: data.totalMarks || 0,
        totalQuestions: data.totalQuestions || 0,
        publishMode: data.publishMode,
        scheduledAt,
        publishedAt,
        availableUntil,
        status,
      });
    });
  }

  async updateTest(testId, userId, data) {
    return await withMetrics("UPDATE_TEST", async () => {
      const updateData = { ...data };

      if (data.availabilityDays) {
        updateData.availableUntil = new Date(
          Date.now() + data.availabilityDays * 24 * 60 * 60 * 1000
        );
      }

      if (data.publishMode === "scheduled") {
        updateData.status = "draft";
        updateData.scheduledAt = new Date(data.scheduledAt);
      }

      if (data.publishMode === "immediate") {
        updateData.status = "live";

        if (!updateData.publishedAt) {
          updateData.publishedAt = new Date();
        }
      }

      const test = await Test.findOneAndUpdate(
        {
          _id: testId,
          userId,
        },
        {
          $set: updateData,
        },
        {
          new: true,
        }
      );

      if (!test) {
        throw new ApiError(404, UX_ERRORS.TEST.NOT_FOUND);
      }

      return test;
    });
  }
}

export default new TestService();
