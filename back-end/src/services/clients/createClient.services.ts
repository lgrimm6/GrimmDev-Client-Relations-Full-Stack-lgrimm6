import { Repository } from "typeorm";
import { hash } from "bcryptjs";
import { IClientRequest } from "../../interfaces/clients";
import { Client } from "../../entities/client.entity";
import { AppError } from "../../errors/appError";
import AppDataSource from "../../data-source";

const createClientServices = async ({
  name,
  email,
  phone,
  username,
  password,
}: IClientRequest): Promise<Client> => {
  const clientRepository: Repository<Client> =
    AppDataSource.getRepository(Client);
  const clients: Client[] = await clientRepository.find();

  const emailAlreadyExists: Client | undefined = clients.find(
    (client) => client.email === email
  );
  const phoneAlreadyExists: Client | undefined = clients.find(
    (client) => client.phone === phone
  );
  const usernameAlreadyExists: Client | undefined = clients.find(
    (client) => client.username === username
  );

  if (emailAlreadyExists) {
    throw new AppError(400, "Email already exists");
  }
  if (phoneAlreadyExists) {
    throw new AppError(400, "Phone already exists");
  }

  if (usernameAlreadyExists) {
    throw new AppError(400, "username already exists");
  }
  const hashedPassword: string = await hash(password, 10);
  const client: Client = clientRepository.create({
    name,
    email,
    phone,
    username,
    password: hashedPassword,
  });
  await clientRepository.save(client);

  /* remover esse retorno depois, basta retornar uma msg de sucess */
  const clientGet: Client | null = await clientRepository.findOneBy({
    email: email,
  });

  return clientGet!;
};

export default createClientServices;
