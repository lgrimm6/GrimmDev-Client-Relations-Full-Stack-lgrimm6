import { Request, Response } from "express";
import { Client } from "../../entities/client.entity";
import profileServices from "../../services/login/profile.services";
import { instanceToPlain } from "class-transformer";
const profileController = async (req: Request, res: Response) => {
  const clientId: string = req.user.id;
  const client: Client = await profileServices(clientId);
  return res.json(instanceToPlain(client));
};

export default profileController;
