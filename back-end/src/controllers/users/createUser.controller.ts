import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import { User } from "../../entities/user.entity";
import { IUserRequest } from "../../interfaces/users";
import createUserService from "../../services/users/createUser.services";

const createUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const user: IUserRequest = req.body;
  const createdUser: User = await createUserService(user);
  return res.status(201).json(instanceToPlain(createdUser));
};

export default createUserController;
