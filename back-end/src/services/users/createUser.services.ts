import { Repository } from "typeorm";
import { hash } from "bcryptjs";
import { IUserRequest } from "../../interfaces/users";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";
import AppDataSource from "../../data-source";

const createUserService = async ({
  name,
  email,
  phone,
  username,
  password,
}: IUserRequest): Promise<User> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);
  const users: User[] = await userRepository.find();

  const emailAlreadyExists: User | undefined = users.find(
    (user) => user.email === email
  );
  const phoneAlreadyExists: User | undefined = users.find(
    (user) => user.phone === phone
  );
  const usernameAlreadyExists: User | undefined = users.find(
    (user) => user.username === username
  );

  if (emailAlreadyExists) {
    throw new AppError(400, "Email already exists");
  }
  if (phoneAlreadyExists) {
    throw new AppError(400, "Phone already exists");
  }

  if (usernameAlreadyExists) {
    throw new AppError(400, "username already exists");
  }
  const hashedPassword: string = await hash(password, 10);
  const user: User = userRepository.create({
    name,
    email,
    phone,
    username,
    password: hashedPassword,
  });
  await userRepository.save(user);

  /* remover esse retorno depois, basta retornar uma msg de sucess */
  const userGet: User | null = await userRepository.findOneBy({ email: email });

  return userGet!;
};

export default createUserService;
