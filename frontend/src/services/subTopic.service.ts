import api from "./axios";

class SubTopicService {
  getByTopic(topicId: string) {
    return api.get(`/sub-topics/topic/${topicId}`);
  }

  getById(id: string) {
    return api.get(`/sub-topics/${id}`);
  }

  create(data: any) {
    return api.post("/sub-topics", data);
  }

  update(id: string, data: any) {
    return api.patch(`/sub-topics/${id}`, data);
  }

  delete(id: string) {
    return api.delete(`/sub-topics/${id}`);
  }
}

export default new SubTopicService();
