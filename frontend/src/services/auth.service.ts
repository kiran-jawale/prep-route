

/**
 * Authentication API service.
 *
 * Endpoints:
 * - POST /auth/register
 * - POST /auth/login
 * - POST /auth/logout
 * - GET /auth/me
 * - POST /auth/refresh-token
 *
 * Purpose:
 * Encapsulates authentication-related API communication.
 */


import api from "./axios";

class AuthService {
  register(data: any) {
    return api.post("/auth/register", data);
  }
  login(data: any) {
    return api.post("/auth/login", data);
  }
  logout() {
    return api.post("/auth/logout");
  }
  getCurrentUser() {
    return api.get("/auth/me");
  }
  refreshToken() {
    return api.post("/auth/refresh-token");
  }
}
export default new AuthService();
