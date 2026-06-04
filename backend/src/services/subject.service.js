import { Subject } from "../models/subject.model.js";
import { withMetrics } from "../utils/metricsLogger.js";

class SubjectService {
  async getAllSubjects() {
    return await withMetrics("GET_ALL_SUBJECTS", async () => {
      return await Subject.find().sort({ name: 1 });
    });
  }
}

export default new SubjectService();
