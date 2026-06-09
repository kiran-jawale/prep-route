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
    const existingTest = await Test.findOne({
      name: data.name,
      userId,
    });

    if (existingTest) {
      throw new ApiError(409, "Already Exists");
    }

    return await Test.create({
      userId,
      name: data.name,
      category: data.category,
      subjectId: data.subjectId,
      topics: data.topics || [],
      subTopics: data.subTopics || [],
      correctMarks: data.correctMarks,
      wrongMarks: data.wrongMarks,
      unattemptMarks: data.unattemptMarks,
      difficulty: data.difficulty,
      totalTime: data.totalTime || 0,
      totalMarks: data.totalMarks || 0,
      totalQuestions: data.totalQuestions || 0,

      status: "draft",

      publishMode: null,
      scheduledAt: null,
      publishedAt: null,
      availableUntil: null,
    });
  });
}

async updateTest(testId, userId, data) {
  return await withMetrics("UPDATE_TEST", async () => {
    const updateData = {
      ...data,
    };

    if (data.publishMode === "immediate") {
      updateData.status = "live";
      updateData.publishMode = "immediate";
      updateData.publishedAt = new Date();
      updateData.scheduledAt = null;
    }

    if (data.publishMode === "scheduled") {
      updateData.status = "draft";
      updateData.publishMode = "scheduled";
      updateData.scheduledAt = new Date(data.scheduledAt);
    }

    if (data.availabilityDays) {
      const baseDate =
        updateData.publishMode === "scheduled"
          ? new Date(updateData.scheduledAt)
          : new Date();

      updateData.availableUntil = new Date(
        baseDate.getTime() +
          data.availabilityDays * 24 * 60 * 60 * 1000
      );
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

  async deleteTest(testId, userId) {
    return await withMetrics("DELETE_TEST", async () => {
      const test = await Test.findOneAndDelete({
        _id: testId,
        userId,
      });

      if (!test) {
        throw new ApiError(404, UX_ERRORS.TEST.NOT_FOUND);
      }

      return {};
    });
  }
}

export default new TestService();
