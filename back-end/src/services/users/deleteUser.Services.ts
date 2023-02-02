import { Repository } from "typeorm";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";

const deleteUserService = async (uuid: string): Promise<void> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);
  const deleteUser: User | null = await userRepository.findOneBy({ id: uuid });

  if (!deleteUser) {
    throw new AppError(404, "user ID not found");
  }
  await userRepository.delete({ id: uuid });

  return;
};

export default deleteUserService;
