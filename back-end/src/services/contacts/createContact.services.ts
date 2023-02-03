import { Repository } from "typeorm";
import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import { Client } from "../../entities/client.entity";
import { AppError } from "../../errors/appError";
import { IContactData } from "../../interfaces/contact";

const createContactServices = async (
  clientId: string,
  { email, name, phone }: IContactData
): Promise<Contact> => {
  const clientRepository: Repository<Client> =
    AppDataSource.getRepository(Client);
  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);
  const client: Client | null = await clientRepository.findOneBy({
    id: clientId,
  });
  if (!client) {
    throw new AppError(404, "user ID not found");
  }
  const newContact = new Contact();
  newContact.name = name;
  newContact.email = email;
  newContact.phone = phone;
  newContact.client = client;

  contactRepository.create(newContact);
  await contactRepository.save(newContact);
  return newContact;
};

export default createContactServices;
