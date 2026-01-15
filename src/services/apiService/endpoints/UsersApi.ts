import { IUsersApi, User } from '../types';
import { IAxiosService } from '@services/axiosService';

const USER: string = 'user' as const;

export class UsersApi implements IUsersApi {
  constructor(private axiosService: IAxiosService) {}

  getAll(): Promise<User[]> {
    return this.axiosService.get<User[]>(`/${USER}`);
  }

  getById(id: string): Promise<User> {
    return this.axiosService.get<User>(`/${USER}/${id}`);
  }

  create(data: Omit<User, 'id'>): Promise<User> {
    return this.axiosService.post<User>(`/${USER}`, data);
  }

  update(id: string, data: Partial<User>): Promise<User> {
    return this.axiosService.patch<User>(`/${USER}/${id}`, data);
  }

  delete(id: string): Promise<void> {
    return this.axiosService.delete(`/${USER}/${id}`);
  }
}
