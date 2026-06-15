

/**
 * SubTopic API service.
 *
 * Endpoints:
 * - GET /sub-topics/topic/:topicId
 * - GET /sub-topics/:id
 * - POST /sub-topics
 * - PATCH /sub-topics/:id
 * - DELETE /sub-topics/:id
 *
 * Purpose:
 * Provides sub-topic management API operations.
 */


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
