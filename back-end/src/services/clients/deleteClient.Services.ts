import { Repository } from "typeorm";
import AppDataSource from "../../data-source";
import { Client } from "../../entities/client.entity";
import { AppError } from "../../errors/appError";

const deleteClientServices = async (uuid: string): Promise<void> => {
  const clientRepository: Repository<Client> =
    AppDataSource.getRepository(Client);
  const deleteClient: Client | null = await clientRepository.findOneBy({
    id: uuid,
  });

  if (!deleteClient) {
    throw new AppError(404, "client ID not found");
  }
  await clientRepository.delete({ id: uuid });

  return;
};

export default deleteClientServices;
