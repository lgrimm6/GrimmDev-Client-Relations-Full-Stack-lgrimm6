import { Request, Response } from "express";
import { IClientLogin } from "../../interfaces/login";
import loginServices from "../../services/login/login.services";
import { instanceToPlain } from "class-transformer";

const loginController = async (req: Request, res: Response) => {
  const clientBody: IClientLogin = req.body;
  const { token, client } = await loginServices(clientBody);
  return res.json({ token, client: instanceToPlain(client) });
};

export default loginController;
