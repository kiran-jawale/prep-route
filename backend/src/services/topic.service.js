import Topic from "../models/topic.model.js";
import ApiError from "../utils/apiError.js";
import { UX_ERRORS } from "../constants/uxErrors.js";
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

  async getTopicById(topicId) {
    return await withMetrics("GET_TOPIC_BY_ID", async () => {
      const topic = await Topic.findById(topicId);

      if (!topic) {
        throw new ApiError(404, UX_ERRORS.TOPIC.NOT_FOUND);
      }

      return topic;
    });
  }

  async createTopic(data) {
    return await withMetrics("CRAETE_TOPIC", async () => {
      return await Topic.create({
        subjectId: data.subjectId,
        name: data.name,
      });
    });
  }

  async updateTopic(topicId, data) {
    return await withMetrics("UPDATE_TOPIC", async () => {
      
      const topic = await Topic.findByIdAndUpdate(
        topicId,
        {
          $set: {
            name: data.name,
          },
        },
        {
          new: true,
          runValidators: true,
        }
      );

      if (!topic) {
        throw new ApiError(404, UX_ERRORS.TOPIC.NOT_FOUND);
      }

      return topic;
    });
  }

  async deleteTopic(topicId) {
    return await withMetrics("DELETE_TOPIC", async () => {
      const topic = await Topic.findByIdAndDelete(topicId);

      if (!topic) {
        throw new ApiError(404, UX_ERRORS.TOPIC.NOT_FOUND);
      }

      return {};
    });
  }
}

export default new TopicService();
