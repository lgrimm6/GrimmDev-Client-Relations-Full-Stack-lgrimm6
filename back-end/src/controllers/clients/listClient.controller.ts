import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import { Client } from "../../entities/client.entity";
import listClientServices from "../../services/clients/listClient.services";

const listClientController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const clientId: string = req.params.clientId;
  const client: Client = await listClientServices(clientId);
  return res.json(instanceToPlain(client));
};

export default listClientController;
