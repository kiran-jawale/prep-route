
export interface User {
  _id: string;
  userId: string;
  fullName: string;
  email: string;
}

export interface AuthState {
  status: boolean;
  user: User | null;
}

export interface LoginPayload {
  identifier: string;
  password: string;
}

export interface RegisterPayload {
  userId: string;
  fullName: string;
  email: string;
  password: string;
}

export interface AuthResponse {
  success: boolean;
  message: string;
  data: {
    user: User;
    accessToken?: string;
  };
}
