export interface IClient {
  createdAt: Date;
  email: string;
  id: string;
  name: string;
  phone: string;
  contact: IContact[];
}

export interface IContact {
  id: string;
  name: string;
  email: string;
  phone: string;
  createdAt: Date;
}

export interface IAddContact {
  name: string;
  email: string;
  phone: string;
}

export interface IFormUpdateContact {
  name?: string;
  email?: string;
  phone?: string;
}
