export interface IUserRequest {
  name: string;
  email: string;
  phone: string;
  username: string;
  password: string;
}

export interface IUserUpdate {
  uuid?: string;
  name?: string;
  email?: string;
  phone?: string;
  username?: string;
  password?: string;
}
