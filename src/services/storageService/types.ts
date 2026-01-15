// Token Storage Interface (for dependency injection)
import { AuthTokens } from '@services/apiService';

export interface IAuthStore{
  getAccessToken: () => Promise<string | null>;
  getRefreshToken: () => Promise<string | null>;
  setTokens: (tokens: AuthTokens) => Promise<void>;
  clearTokens: () => Promise<void>;
}

export interface IStorage {
  set: (data: any, key: string) => void;
  get: (key: string) => any | null;
  delete: (key: string) => void;
  clearAll: () => void;
  contains: (key: string) => boolean;
  getAllKeys: () => string[];
}
