import { SubTopic } from "../models/subTopic.model.js";
import { withMetrics } from "../utils/metricsLogger.js";

class SubTopicService {
  async getSubTopicsByTopic(topicId) {
    return await withMetrics("GET_SUBTOPICS_BY_TOPIC", async () => {
      return await SubTopic.find({
        topicId,
      }).sort({
        name: 1,
      });
    });
  }
}

export default new SubTopicService();
