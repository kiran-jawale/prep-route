


import api from "../constants/api.ts"

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

  getMe() {
    return api.get("/auth/me");
  }
}

export default new AuthService();
