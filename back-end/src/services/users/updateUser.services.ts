import { Repository } from "typeorm";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";
import { IUserUpdate } from "../../interfaces/users";

const updateUserServices = async (
  uuid: string,
  updateData: IUserUpdate
): Promise<User> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);
  const user: User | null = await userRepository.findOneBy({ id: uuid });
  if (!user) {
    throw new AppError(404, "User does not exist");
  }
  await userRepository.update({ id: uuid }, { ...updateData });
  const userUpdated = await userRepository.findOneBy({ id: uuid });
  return userUpdated!;
};

export default updateUserServices;
