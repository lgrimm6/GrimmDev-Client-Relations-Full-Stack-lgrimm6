import { Request, Response } from "express";
import deleteUserService from "../../services/users/deleteUser.Services";

const deleteUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const uuid: string = req.params.uuid;
  await deleteUserService(uuid);
  return res.status(204).json({ msg: "Deleted user" });
};

export default deleteUserController;
