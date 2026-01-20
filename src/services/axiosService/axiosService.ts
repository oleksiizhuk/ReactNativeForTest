import axios, { AxiosInstance } from 'axios';
import { IAxiosService, AxiosConfig } from './types';
import { setupInterceptors } from '@services/axiosService/interceptors.ts';
import { IAuthStore } from '@services/storageService/types.ts';

const DEFAULT_CONFIG: AxiosConfig = {
  baseURL: 'https://nest-ruby-theta.vercel.app/',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
};

class AxiosService implements IAxiosService {
  private client: AxiosInstance;

  constructor(config: Partial<AxiosConfig> = {}, authStore: IAuthStore) {
    this.client = axios.create({
      ...DEFAULT_CONFIG,
      ...config,
    });
    setupInterceptors(this.client, authStore);
  }

  get<T>(url: string, params?: object): Promise<T> {
    return this.client.get<T>(url, { params }).then(res => res.data);
  }

  post<T>(url: string, data?: object): Promise<T> {
    return this.client.post<T>(url, data).then(res => res.data);
  }

  put<T>(url: string, data?: object): Promise<T> {
    return this.client.put<T>(url, data).then(res => res.data);
  }

  patch<T>(url: string, data?: object): Promise<T> {
    return this.client.patch<T>(url, data).then(res => res.data);
  }

  delete<T>(url: string): Promise<T> {
    return this.client.delete<T>(url).then(res => res.data);
  }
}

export { AxiosService }
