import { Request, Response } from "express";
import deleteClientServices from "../../services/clients/deleteClient.Services";

const deleteClientController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const clientId: string = req.params.clientId;
  await deleteClientServices(clientId);
  return res.status(204).json({ msg: "Deleted client" });
};

export default deleteClientController;
