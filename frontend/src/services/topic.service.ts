


import api from "../constants/api";

class TopicService {
  getBySubject(subjectId: string) {
    return api.get(`/topics/subject/${subjectId}`);
  }
}

export default new TopicService();
