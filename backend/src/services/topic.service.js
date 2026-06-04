import { Topic } from "../models/topic.model.js";
import { withMetrics } from "../utils/metricsLogger.js";

class TopicService {
  async getTopicsBySubject(subjectId) {
    return await withMetrics("GET_TOPICS_BY_SUBJECT", async () => {
      return await Topic.find({
        subjectId,
      }).sort({
        name: 1,
      });
    });
  }
}

export default new TopicService();
