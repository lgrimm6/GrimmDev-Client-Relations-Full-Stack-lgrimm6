import AppDataSource from "../../data-source";
import { Client } from "../../entities/client.entity";
import { AppError } from "../../errors/appError";

const profileServices = async (clientId: string): Promise<Client> => {
  const clientRepository = AppDataSource.getRepository(Client);
  const client: Client | null = await clientRepository.findOneBy({
    id: clientId,
  });

  if (!client) {
    throw new AppError(400, "client not found");
  }
  return client;
};

export default profileServices;
