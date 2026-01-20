import { AxiosService, IAxiosService } from '@services/axiosService';
import { AuthApi } from './endpoints/AuthApi';
import { UsersApi } from './endpoints/UsersApi';
import { IAuthApi, IUsersApi } from './types';
import { authStore } from '@services/storageService';

// Main API class with DI
class Api {
  public auth: IAuthApi;
  public users: IUsersApi;

  constructor(private axiosService: IAxiosService) {
    // Inject client into services
    this.auth = new AuthApi(this.axiosService);
    this.users = new UsersApi(this.axiosService);
  }
}

// Default instance with DI
const ApiService = new Api(new AxiosService({}, authStore));

export { ApiService };
