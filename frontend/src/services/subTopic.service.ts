

import api from "../constants/api";

class SubTopicService {
  getByTopic(topicId: string) {
    return api.get(`/sub-topics/topic/${topicId}`);
  }
}

export default new SubTopicService();
