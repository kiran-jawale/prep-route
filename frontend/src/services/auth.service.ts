
import { AxiosPromise } from "axios";
import api from "../constants/api";
import type { User, AuthCredentials, AuthResponse } from "../types/auth.types";

// ============================================================================
// Authentication Service - Type-safe auth API calls
// ============================================================================

/**
 * AuthService class - handles all authentication-related API calls
 * Uses proper TypeScript typing for all methods and return values
 */
class AuthService {
  /**
   * Register a new user account
   * @param credentials - Email, password, and name for registration
   * @returns Promise with auth response containing user and optional token
   */
  register(credentials: AuthCredentials): AxiosPromise<AuthResponse> {
    return api.post<AuthResponse>("/auth/register", credentials);
  }

  /**
   * Authenticate user with email and password
   * @param credentials - User's login credentials
   * @returns Promise with authenticated user data and token
   */
  login(credentials: Omit<AuthCredentials, "fullName">): AxiosPromise<AuthResponse> {
    return api.post<AuthResponse>("/auth/login", credentials);
  }

  /**
   * Clear user session and remove authentication token
   * @returns Promise indicating successful logout
   */
  logout(): AxiosPromise<{ success: boolean; message: string }> {
    return api.post("/auth/logout");
  }

  /**
   * Fetch currently authenticated user's profile information
   * Used on app initialization to restore user session
   * @returns Promise with current user data
   */
  getMe(): AxiosPromise<{ success: boolean; data: User }> {
    return api.get("/auth/me");
  }
}

// Export singleton instance to ensure only one AuthService is used app-wide
export default new AuthService();
