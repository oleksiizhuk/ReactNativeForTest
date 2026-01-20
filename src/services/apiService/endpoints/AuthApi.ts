import {
  IAuthApi,
  LoginRequest,
  LoginResponse,
  RefreshTokenRequest,
  RefreshTokenResponse,
  RegistrationRequest,
} from '../types';
import { IAxiosService } from '@services/axiosService';

const AUTH: string = 'auth' as const;
export class AuthApi implements IAuthApi {
  constructor(private axiosService: IAxiosService) {}

  login(data: LoginRequest): Promise<LoginResponse> {
    return this.axiosService.post<LoginResponse>(`/${AUTH}/login`, data);
  }

  refreshToken(data: RefreshTokenRequest): Promise<RefreshTokenResponse> {
    return this.axiosService.post<RefreshTokenResponse>(
      `/${AUTH}/refresh-token`,
      data,
    );
  }

  logout(): Promise<void> {
    return this.axiosService.post(`/${AUTH}/logout`);
  }

  registration(data: RegistrationRequest): Promise<LoginResponse> {
    return this.axiosService.post<LoginResponse>(`/${AUTH}/registration`, data);
  }
}
