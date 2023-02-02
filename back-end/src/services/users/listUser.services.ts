import { Repository } from "typeorm";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";

const listUserServices = async (uuid: string) => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);
  const user: User | null = await userRepository.findOneBy({ id: uuid });
  if (!user) {
    throw new AppError(404, "User does not exist");
  }
  return user;
};

export default listUserServices;
