import { Request, Response } from "express";
import deleteUserServices from "../../services/clients/deleteClient.Services";

const deleteUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const uuid: string = req.params.uuid;
  await deleteUserServices(uuid);
  return res.status(204).json({ msg: "Deleted user" });
};

export default deleteUserController;
