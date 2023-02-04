import { Repository } from "typeorm";
import AppDataSource from "../../data-source";
import { Client } from "../../entities/client.entity";
import { Contact } from "../../entities/contact.entity";
import { AppError } from "../../errors/appError";

const deleteContactsServices = async (
  clientId: string,
  contactId: string
): Promise<void> => {
  const clientRepository: Repository<Client> =
    AppDataSource.getRepository(Client);
  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const client: Client | null = await clientRepository.findOneBy({
    id: clientId,
  });
  if (!client) {
    throw new AppError(400, "Client does not exist");
  }
  const contact: Contact | null = await contactRepository.findOneBy({
    id: contactId,
  });
  if (!contact) {
    throw new AppError(400, "Contact does not exist");
  }
  await contactRepository.delete({
    id: contactId,
  });
  return;
};

export default deleteContactsServices;
