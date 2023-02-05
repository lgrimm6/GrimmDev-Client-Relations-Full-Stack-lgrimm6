import { compare } from "bcryptjs";
import { Repository } from "typeorm";
import AppDataSource from "../../data-source";
import { Client } from "../../entities/client.entity";
import { AppError } from "../../errors/appError";
import { IClientLogin } from "../../interfaces/login";
import jwt from "jsonwebtoken";

const loginServices = async ({
  username,
  password,
}: IClientLogin): Promise<{ token: string; client: Client }> => {
  const clientRepository: Repository<Client> =
    AppDataSource.getRepository(Client);
  const client: Client | null = await clientRepository.findOneBy({ username });
  if (!client) {
    throw new AppError(403, "Wrong username or password");
  }
  const passwordMatch: boolean = await compare(password, client.password);
  if (!passwordMatch) {
    throw new AppError(403, "Wrong username or password");
  }
  const token: string = jwt.sign(
    {
      id: client.id,
    },
    process.env.SECRET_KEY as string,
    { expiresIn: "24h", subject: client.id }
  );
  return { token, client };
};

export default loginServices;
