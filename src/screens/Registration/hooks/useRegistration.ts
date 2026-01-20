import { ApiService } from '@/services';

export const useRegistration = () => {
  const onRegister = async () => {
    await ApiService.auth.registration({
      firstName: 'firstName',
      lastName: 'lastName',
      age: 18,
      email: 'test@gmail.com',
      password: '123123',
      passwordConfirm: '123123',
    });
  }

  return {
    onRegister
  }
}
