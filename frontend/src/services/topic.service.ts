import api from "./axios";

class TopicService {
  getBySubject(subjectId: string) {
    return api.get(`/topics/subject/${subjectId}`);
  }
  getById(id: string) {
    return api.get(`/topics/${id}`);
  }
  create(data: any) {
    return api.post("/topics", data);
  }
  update(id: string, data: any) {
    return api.patch(`/topics/${id}`, data);
  }
  delete(id: string) {
    return api.delete(`/topics/${id}`);
  }
}
export default new TopicService();
