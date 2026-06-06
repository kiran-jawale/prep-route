import Topic from "../models/topic.model.js";
import ApiError from "../utils/apiError.js";
import { UX_ERRORS } from "../constants/uxErrors.js";

class TopicService {
  async getTopicsBySubject(subjectId) {
    return await Topic.find({
      subjectId,
    }).sort({
      name: 1,
    });
  }

  async getTopicById(topicId) {
    const topic = await Topic.findById(topicId);

    if (!topic) {
      throw new ApiError(404, UX_ERRORS.TOPIC.NOT_FOUND);
    }

    return topic;
  }

  async createTopic(data) {
    return await Topic.create({
      subjectId: data.subjectId,
      name: data.name,
    });
  }

  async updateTopic(topicId, data) {
    const topic = await Topic.findByIdAndUpdate(
      topicId,
      {
        $set: data,
      },
      {
        new: true,
      }
    );

    if (!topic) {
      throw new ApiError(404, UX_ERRORS.TOPIC.NOT_FOUND);
    }

    return topic;
  }

  async deleteTopic(topicId) {
    const topic = await Topic.findByIdAndDelete(topicId);

    if (!topic) {
      throw new ApiError(404, UX_ERRORS.TOPIC.NOT_FOUND);
    }

    return {};
  }
}

export default new TopicService();
