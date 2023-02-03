import { Repository } from "typeorm";
import AppDataSource from "../../data-source";
import { Client } from "../../entities/client.entity";
import { AppError } from "../../errors/appError";
import { IClientUpdate } from "../../interfaces/clients";

const updateClientServices = async (
  uuid: string,
  updateData: IClientUpdate
): Promise<Client> => {
  const clientRepository: Repository<Client> =
    AppDataSource.getRepository(Client);
  const client: Client | null = await clientRepository.findOneBy({ id: uuid });
  if (!client) {
    throw new AppError(404, "Client does not exist");
  }
  await clientRepository.update({ id: uuid }, { ...updateData });
  const clientUpdated = await clientRepository.findOneBy({ id: uuid });
  return clientUpdated!;
};

export default updateClientServices;
