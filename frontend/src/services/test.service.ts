import api from "../constants/api";

class TestService {
  getAll() {
    return api.get("/tests");
  }

  getById(id: string) {
    return api.get(`/tests/${id}`);
  }

  create(data: any) {
    return api.post("/tests", data);
  }

  update(id: string, data: any) {
    return api.put(`/tests/${id}`, data);
  }
}

export default new TestService();
