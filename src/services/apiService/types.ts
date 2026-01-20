// Auth
export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegistrationRequest {
  firstName: string;
  lastName: string;
  age: number;
  email: string;
  password: string;
  passwordConfirm: string;
}

export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
}

export interface LoginResponse extends AuthTokens {
  user: User;
}

export interface RefreshTokenRequest {
  refreshToken: string;
}

export interface RefreshTokenResponse {
  accessToken: string;
  refreshToken: string;
}

// User
export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  password: number;
  shoppingCartId: null;
  createdAt: string;
  updatedAt: string;
}

// API Response wrapper
export interface ApiResponse<T> {
  data: T;
  message?: string;
  status: number;
}

// Error
export interface ApiError {
  message: string;
  status: number;
  code?: string;
}

export interface IAuthApi {
  login(data: LoginRequest): Promise<LoginResponse>;
  refreshToken(data: RefreshTokenRequest): Promise<RefreshTokenResponse>;
  logout(): Promise<void>;
  registration(data: RegistrationRequest): Promise<LoginResponse>;
}

export interface IUsersApi {
  getAll(): Promise<User[]>;
  getById(id: string): Promise<User>;
  create(data: Omit<User, 'id'>): Promise<User>;
  update(id: string, data: Partial<User>): Promise<User>;
  delete(id: string): Promise<void>;
}
