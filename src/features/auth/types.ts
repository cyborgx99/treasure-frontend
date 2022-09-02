export interface User {
  id: string;
  name: string;
}

export interface AuthState {
  user: User | null;
  isLoading: boolean;
  error?: string;
  token: string | null;
}

export interface LoginInput {
  name: string;
}

export interface LoginResponse {
  token: string;
  user: User;
}

export interface GetCurrentUserResponse {
  user: User;
}
