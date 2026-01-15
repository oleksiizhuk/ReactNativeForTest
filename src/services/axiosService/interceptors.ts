import axios, {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';
import { CustomAxiosRequestConfig } from './types';
import { IAuthStore } from '@services/storageService/types';
import { RefreshTokenResponse } from '@services/apiService/types';

let tokenStorage: IAuthStore | null = null;
let baseURL = '';

// Separate axios instance for refresh to avoid interceptor loop
const refreshClient = axios.create();

const refreshAccessToken = async (): Promise<RefreshTokenResponse | null> => {
  if (!tokenStorage) return null;

  const refreshToken = await tokenStorage.getRefreshToken();
  if (!refreshToken) return null;

  try {
    const response = await refreshClient.post<RefreshTokenResponse>(
      `${baseURL}/auth/refresh-token`,
      { refreshToken },
    );
    await tokenStorage.setTokens(response.data);
    return response.data;
  } catch {
    await tokenStorage.clearTokens();
    return null;
  }
};

const onRequest = async (
  config: InternalAxiosRequestConfig,
): Promise<InternalAxiosRequestConfig> => {
  if (!tokenStorage) return config;

  const accessToken = await tokenStorage.getAccessToken();
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
};

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  return Promise.reject(error);
};

const onResponse = (response: AxiosResponse): AxiosResponse => {
  return response;
};

const onResponseError = async (
  error: AxiosError,
  axiosInstance: AxiosInstance,
): Promise<AxiosResponse> => {
  const originalRequest = error.config as CustomAxiosRequestConfig;

  if (error.response?.status !== 401 || originalRequest._retry) {
    return Promise.reject(error);
  }

  originalRequest._retry = true;

  const newTokens = await refreshAccessToken();
  if (!newTokens) {
    return Promise.reject(error);
  }

  originalRequest.headers.Authorization = `Bearer ${newTokens.accessToken}`;
  return axiosInstance(originalRequest);
};

export const setupInterceptors = (
  axiosInstance: AxiosInstance,
  storage: IAuthStore,
): void => {
  tokenStorage = storage;
  baseURL = axiosInstance.defaults.baseURL || '';

  axiosInstance.interceptors.request.use(onRequest, onRequestError);

  axiosInstance.interceptors.response.use(onResponse, (error: AxiosError) =>
    onResponseError(error, axiosInstance),
  );
};