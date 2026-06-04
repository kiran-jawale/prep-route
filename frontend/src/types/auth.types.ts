// ============================================================================
// Authentication Types - Comprehensive typing for auth features
// ============================================================================

// User data structure - represents authenticated user from backend
export interface User {
  _id: string;
  userId: string;
  fullName: string;
  email: string;
}

// Authentication state in Redux store
export interface AuthState {
  status: boolean;
  user: User | null;
}

// Login/Register request payload - what user sends to backend
export interface AuthCredentials {
  email: string;
  password: string;
  fullName?: string; // Optional for login, required for register
}

// API response from auth endpoints
export interface AuthResponse {
  success: boolean;
  message: string;
  data: {
    user: User;
    token?: string; // Optional auth token if returned
  };
}