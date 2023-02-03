import { Repository } from "typeorm";
import AppDataSource from "../../data-source";
import { Client } from "../../entities/client.entity";
import { Contact } from "../../entities/contact.entity";
import { AppError } from "../../errors/appError";
import { IContactUpdate } from "../../interfaces/contact";

const updateContactServices = async (
  clientId: string,
  contactId: string,
  updateData: IContactUpdate
) => {
  const clientRepository = AppDataSource.getRepository(Client);
  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const client = await clientRepository.findOneBy({ id: clientId });
  if (!client) {
    throw new AppError(400, "Client does not exist");
  }

  await contactRepository.update(contactId, { ...updateData });
  const contactUpdate = contactRepository.findBy({ id: contactId });

  return contactUpdate;
};

export default updateContactServices;
