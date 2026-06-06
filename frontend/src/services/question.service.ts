import api from "./api";

class QuestionService {
  getByTest(testId: string) {
    return api.get(`/questions/test/${testId}`);
  }

  bulkCreate(data: any) {
    return api.post("/questions/bulk", data);
  }

  update(id: string, data: any) {
    return api.patch(`/questions/${id}`, data);
  }

  delete(id: string) {
    return api.delete(`/questions/${id}`);
  }
}

export default new QuestionService();
