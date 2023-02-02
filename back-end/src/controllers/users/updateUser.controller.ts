import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import { IUserUpdate } from "../../interfaces/users";
import updateUserServices from "../../services/users/updateUser.services";

const updateUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const uuid = req.params.uuid;
  const updateData: IUserUpdate = req.body;
  const updatedUser = await updateUserServices(uuid, updateData);
  return res.status(200).json(instanceToPlain(updatedUser));
};
export default updateUserController;
