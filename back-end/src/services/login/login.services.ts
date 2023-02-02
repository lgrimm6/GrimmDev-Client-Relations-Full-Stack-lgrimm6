import { compare } from "bcryptjs";
import { Repository } from "typeorm";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";
import { IUserLogin } from "../../interfaces/login";
import jwt from "jsonwebtoken";

const loginServices = async ({
  username,
  password,
}: IUserLogin): Promise<string> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);
  const user: User | null = await userRepository.findOneBy({ username });
  if (!user) {
    throw new AppError(403, "Wrong username or password");
  }
  const passwordMatch: boolean = await compare(password, user.password);
  if (!passwordMatch) {
    throw new AppError(403, "Wrong username or password");
  }
  const token: string = jwt.sign(
    {
      id: user.id,
    },
    process.env.SECRET_KEY as string,
    { expiresIn: "24h", subject: user.id }
  );
  return token;
};

export default loginServices;
