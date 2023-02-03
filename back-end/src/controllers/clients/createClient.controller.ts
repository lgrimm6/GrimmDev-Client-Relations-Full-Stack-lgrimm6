import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import { Client } from "../../entities/client.entity";
import { IClientRequest } from "../../interfaces/clients";
import createClientServices from "../../services/clients/createClient.services";

const createClientController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const Client: IClientRequest = req.body;
  const createdClient: Client = await createClientServices(Client);
  return res.status(201).json(instanceToPlain(createdClient));
};

export default createClientController;
