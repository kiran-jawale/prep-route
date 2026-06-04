import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

// ============================================================================
// API Configuration - Centralized axios instance with proper typing
// ============================================================================

// Define configuration for API requests
const apiConfig: AxiosRequestConfig = {
  // Base URL for all API endpoints - defaults to /api/v1 if not set in environment
  baseURL: import.meta.env.BASE_URL || "/api/v1",
  // Include cookies in cross-origin requests for authentication
  withCredentials: true,
};

// Create and configure axios instance for all API calls
// This single instance ensures consistent request/response handling across the app
// Type: AxiosInstance provides full TypeScript support for all axios methods
const api: AxiosInstance = axios.create(apiConfig);

export default api;