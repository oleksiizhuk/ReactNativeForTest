import {
  AxiosService,
} from '@services/axiosService/axiosService.ts';
import { AuthApi } from './endpoints/AuthApi';
import { UsersApi } from './endpoints/UsersApi';
import {  IAuthApi, IUsersApi } from './types';
import { authStore } from '@services/storageService/AuthStore';
import { IAxiosService } from '@services/axiosService';

// Main API class with DI
export class Api {
  public auth: IAuthApi;
  public users: IUsersApi;

  constructor(private axiosService: IAxiosService) {

    // Inject client into services
    this.auth = new AuthApi(this.axiosService);
    this.users = new UsersApi(this.axiosService);
  }
}

// Default instance with DI
export const API = new Api(new AxiosService({}, authStore));
