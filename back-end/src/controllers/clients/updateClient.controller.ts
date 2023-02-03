import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import { IClientUpdate } from "../../interfaces/clients";
import updateClientServices from "../../services/clients/updateClient.services";

const updateClientController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const clientId = req.params.clientId;
  const updateData: IClientUpdate = req.body;
  const updatedClient = await updateClientServices(clientId, updateData);
  return res.status(200).json(instanceToPlain(updatedClient));
};
export default updateClientController;
