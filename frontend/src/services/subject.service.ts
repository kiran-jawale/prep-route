

/**
 * Subject API service.
 *
 * Endpoints:
 * - GET /subjects
 * - GET /subjects/:id
 * - POST /subjects
 * - PATCH /subjects/:id
 * - DELETE /subjects/:id
 *
 * Purpose:
 * Provides subject management API operations.
 */


import api from "./axios";

class SubjectService {
  getAll() {
    return api.get("/subjects");
  }
  getById(id: string) {
    return api.get(`/subjects/${id}`);
  }
  create(data: any) {
    return api.post("/subjects", data);
  }
  update(id: string, data: any) {
    return api.patch(`/subjects/${id}`, data);
  }
  delete(id: string) {
    return api.delete(`/subjects/${id}`);
  }
}
export default new SubjectService();
