import { Repository } from "typeorm";
import AppDataSource from "../../data-source";
import { Client } from "../../entities/client.entity";
import { Contact } from "../../entities/contact.entity";
import { AppError } from "../../errors/appError";

const listContactsServices = async (clientId: string) => {
  const clientRepository = AppDataSource.getRepository(Client);
  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const client = await clientRepository.findOneBy({ id: clientId });
  if (!client) {
    throw new AppError(400, "Client does not exist");
  }
  const contacts = await contactRepository.find({
    where: { client: { id: clientId } },
  });

  return contacts;
};

export default listContactsServices;
