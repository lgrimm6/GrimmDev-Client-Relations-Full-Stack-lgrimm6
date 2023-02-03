import { Repository } from "typeorm";
import AppDataSource from "../../data-source";
import { Client } from "../../entities/client.entity";
import { AppError } from "../../errors/appError";

const deleteClientServices = async (clientId: string): Promise<void> => {
  const clientRepository: Repository<Client> =
    AppDataSource.getRepository(Client);
  const deleteClient: Client | null = await clientRepository.findOneBy({
    id: clientId,
  });

  if (!deleteClient) {
    throw new AppError(404, "client ID not found");
  }
  await clientRepository.delete({ id: clientId });

  return;
};

export default deleteClientServices;
