import { StorageService } from '@services/storageService';
import { IAuthStore } from './types';
import { AuthTokens } from '@services/apiService';

const AUTH_KEYS = {
  ACCESS_TOKEN: 'accessToken',
  REFRESH_TOKEN: 'refreshToken',
} as const;

class AuthStore extends StorageService implements IAuthStore {
  getAccessToken = async (): Promise<string | null> => {
    return this.get(AUTH_KEYS.ACCESS_TOKEN) ?? null;
  };

  getRefreshToken = async (): Promise<string | null> => {
    return this.get(AUTH_KEYS.REFRESH_TOKEN) ?? null;
  };

  setTokens = async (tokens: AuthTokens): Promise<void> => {
    this.set(tokens.accessToken, AUTH_KEYS.ACCESS_TOKEN);
    this.set(tokens.refreshToken, AUTH_KEYS.REFRESH_TOKEN);
  };

  clearTokens = async (): Promise<void> => {
    this.delete(AUTH_KEYS.ACCESS_TOKEN);
    this.delete(AUTH_KEYS.REFRESH_TOKEN);
  };

  isAuthenticated = (): boolean => {
    return !!this.get(AUTH_KEYS.ACCESS_TOKEN);
  };
}

const authStore = new AuthStore();

export { authStore, AuthStore };
