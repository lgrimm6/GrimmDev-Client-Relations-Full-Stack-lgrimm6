import { Repository } from "typeorm";
import AppDataSource from "../../data-source";
import { Client } from "../../entities/client.entity";
import { AppError } from "../../errors/appError";

const listClientServices = async (clientId: string) => {
  const clientRepository: Repository<Client> =
    AppDataSource.getRepository(Client);
  const client: Client | null = await clientRepository.findOneBy({
    id: clientId,
  });
  if (!client) {
    throw new AppError(404, "Client does not exist");
  }
  return client;
};

export default listClientServices;
