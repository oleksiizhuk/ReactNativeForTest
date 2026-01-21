import { useState } from 'react';
import { ApiService } from '@/services';
import { RegistrationRequest } from '@services/apiService/types';

const initialFormState: RegistrationRequest = {
  firstName: 'test1',
  lastName: 'test2',
  age: 19,
  email: 'test+110@gmail.com',
  password: '223132qQ!',
  passwordConfirm: '223132qQ!',
};

export const useRegistration = () => {
  const [form, setForm] = useState<RegistrationRequest>(initialFormState);
  const [isLoading, setIsLoading] = useState(false);

  const updateField = <K extends keyof RegistrationRequest>(
    field: K,
    value: RegistrationRequest[K],
  ) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  const isFormValid =
    form.firstName.trim() !== '' &&
    form.lastName.trim() !== '' &&
    form.age > 0 &&
    form.email.trim() !== '' &&
    form.password.trim() !== '' &&
    form.password === form.passwordConfirm;

  const onRegister = async () => {
    if (!isFormValid) return;
    setIsLoading(true);
    try {
      console.log('form = ', form);
      const result = await ApiService.auth.registration(form);
      console.log('result = ', result);
    } catch (error) {
      console.error('Registration failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    form,
    updateField,
    onRegister,
    isFormValid,
    isLoading,
  };
};
