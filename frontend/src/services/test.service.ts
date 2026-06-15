import api from "./axios";

class TestService {
  getById(id: string) {
    return api.get(`/tests/${id}`);
  }
  getAll(page = 1, limit = 20) {
    return api.get("/tests", {
      params: {
        page,
        limit,
      },
    });
  }
  getDashboardStats() {
    return api.get("/tests/dashboard-stats");
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
  updateMarkingScheme(id: string, data: any) {
    return api.patch(`/tests/${id}/marking-scheme`, data);
  }
}

export default new TestService();
