import SubTopic from "../models/subTopic.model.js";
import ApiError from "../utils/apiError.js";
import { UX_ERRORS } from "../constants/uxErrors.js";
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

  async getSubTopicById(subTopicId) {
    return await withMetrics("GET_SUBTOPIC_BY_ID", async () => {
      const subTopic = await SubTopic.findById(subTopicId);

      if (!subTopic) {
        throw new ApiError(404, UX_ERRORS.SUB_TOPIC.NOT_FOUND);
      }

      return subTopic;
    });
  }

  async createSubTopic(data) {
    return await withMetrics("CREATE_SUBTOPIC", async () => {
      return await SubTopic.create({
        topicId: data.topicId,
        name: data.name,
      });
    });
  }

  async updateSubTopic(subTopicId, data) {
    return await withMetrics("UPDATE_SUBTOPIC", async () => {
      const subTopic = await SubTopic.findByIdAndUpdate(
        subTopicId,
        {
          $set: data,
        },
        {
          new: true,
        }
      );
      if (!subTopic) {
        throw new ApiError(404, UX_ERRORS.SUB_TOPIC.NOT_FOUND);
      }
      return subTopic;
    });
  }

  async deleteSubTopic(subTopicId) {
    return await withMetrics("DELETE_SUBTOPIC", async () => {
      const subTopic = await SubTopic.findByIdAndDelete(subTopicId);

      if (!subTopic) {
        throw new ApiError(404, UX_ERRORS.SUB_TOPIC.NOT_FOUND);
      }

      return {};
    });
  }
}

export default new SubTopicService();
