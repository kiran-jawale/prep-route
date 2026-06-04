
import api from "../constants/api";

class QuestionService {
  bulkCreate(data: any) {
    return api.post("/questions/bulk", data);
  }
}

export default new QuestionService();
