import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import { User } from "../../entities/user.entity";
import listUserServices from "../../services/users/listUser.services";

const listUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const uuid: string = req.params.uuid;
  const user: User = await listUserServices(uuid);
  return res.json(instanceToPlain(user));
};

export default listUserController;
