import api from "./axios";

class QuestionService {
  bulkCreate(data: any) {
    return api.post("/questions/bulk", data);
  }
}

export default new QuestionService();
