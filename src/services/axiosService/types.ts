import { RawAxiosRequestHeaders, InternalAxiosRequestConfig } from 'axios';

// API Service Interfaces (for DI)
export interface IAxiosService {
  get<T>(url: string, params?: object): Promise<T>;
  post<T>(url: string, data?: object): Promise<T>;
  put<T>(url: string, data?: object): Promise<T>;
  patch<T>(url: string, data?: object): Promise<T>;
  delete<T>(url: string): Promise<T>;
}

// Config
export interface AxiosConfig {
  baseURL: string;
  timeout: number;
  headers: RawAxiosRequestHeaders;
}

export interface CustomAxiosRequestConfig extends InternalAxiosRequestConfig {
  _retry?: boolean;
}
