export interface RegistrationFormData {
  firstName: string;
  lastName: string;
  age: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

export interface RegistrationFormErrors {
  firstName?: string;
  lastName?: string;
  age?: string;
  email?: string;
  password?: string;
  passwordConfirm?: string;
}

export interface RegistrationTemplateProps {
  formData: RegistrationFormData;
  errors: RegistrationFormErrors;
  isLoading: boolean;
  onChangeField: (field: keyof RegistrationFormData, value: string) => void;
  onSubmit: () => void;
}