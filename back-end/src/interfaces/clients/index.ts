export interface IClientRequest {
  name: string;
  email: string;
  phone: string;
  username: string;
  password: string;
}

export interface IClientUpdate {
  uuid?: string;
  name?: string;
  email?: string;
  phone?: string;
  username?: string;
  password?: string;
}
