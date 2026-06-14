import Subject from "../models/subject.model.js";
import ApiError from "../utils/apiError.js";
import { UX_ERRORS } from "../constants/uxErrors.js";
import { withMetrics } from "../utils/metricsLogger.js";

class SubjectService {
  async getAllSubjects() {
    return await withMetrics("GET_ALL_SUBJECTS", async () => {
      return await Subject.find().sort({ createdAt: -1 });
    });
  }

  async getSubjectById(subjectId) {
    return await withMetrics("GET_SUBJECT_BY_ID", async () => {
      const subject = await Subject.findById(subjectId);

      if (!subject) {
        throw new ApiError(404, UX_ERRORS.SUBJECT.NOT_FOUND);
      }

      return subject;
    });
  }

  async createSubject(data) {
    return await withMetrics("CREATE_SUBJECT", async () => {
      return await Subject.create({
        name: data.name,
      });
    });
  }

  async updateSubject(subjectId, data) {
    return await withMetrics("UPDATE_SUBJECT", async () => {
      const subject = await Subject.findByIdAndUpdate(
        subjectId,
        {
          $set: data.data,
        },
        {
          new: true,
          runValidators: true,
        }
      );

      if (!subject) {
        throw new ApiError(404, UX_ERRORS.SUBJECT.NOT_FOUND);
      }

      return subject;
    });
  }

  async deleteSubject(subjectId) {
    return await withMetrics("DELETE_SUBJECT", async () => {
      const subject = await Subject.findByIdAndDelete(subjectId);

      if (!subject) {
        throw new ApiError(404, UX_ERRORS.SUBJECT.NOT_FOUND);
      }

      return {};
    });
  }
}

export default new SubjectService();
