
import api from "../constants/api.ts";

class SubjectService {
  getAll() {
    return api.get("/subjects");
  }
}

export default new SubjectService();
