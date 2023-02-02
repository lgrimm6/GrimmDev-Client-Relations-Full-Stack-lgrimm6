import { Repository } from "typeorm";
import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";
import { IContactData } from "../../interfaces/contact";

const createContactServices = async (
  userId: string,
  { email, name, phone }: IContactData
): Promise<Contact> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);
  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);
  const user: User | null = await userRepository.findOneBy({ id: userId });
  if (!user) {
    throw new AppError(404, "user ID not found");
  }
  const newContact = new Contact();
  newContact.name = name;
  newContact.email = email;
  newContact.phone = phone;
  newContact.user = user;

  contactRepository.create(newContact);
  await contactRepository.save(newContact);
  return newContact;
};

export default createContactServices;
