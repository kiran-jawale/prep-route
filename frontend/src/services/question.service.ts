

/**
 * Question API service.
 *
 * Endpoints:
 * - POST /questions/bulk
 *
 * Purpose:
 * Handles question creation operations for test workflows.
 */


import api from "./axios";

class QuestionService {
  bulkCreate(data: any) {
    return api.post("/questions/bulk", data);
  }
}

export default new QuestionService();
