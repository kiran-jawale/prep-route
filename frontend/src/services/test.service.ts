import api from "./api";

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
    return api.patch(`/tests/${id}`, data);
  }

  delete(id: string) {
    return api.delete(`/tests/${id}`);
  }
}

export default new TestService();
