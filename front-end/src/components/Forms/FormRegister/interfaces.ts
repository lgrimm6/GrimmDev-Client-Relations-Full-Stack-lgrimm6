export interface IFormRegister {
  name: string;
  email: string;
  phone: string;
  username: string;
  password: string;
  confirmPassword: string;
}

export interface IFormUpdate {
  name?: string;
  email?: string;
  phone?: string;
  username?: string;
  password?: string;
}
