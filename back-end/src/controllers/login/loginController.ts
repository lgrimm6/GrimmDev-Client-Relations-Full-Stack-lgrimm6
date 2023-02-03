import { Request, Response } from "express";
import { IClientLogin } from "../../interfaces/login";
import loginServices from "../../services/login/login.services";

const loginController = async (req: Request, res: Response) => {
  const client: IClientLogin = req.body;
  const token: string = await loginServices(client);
  return res.json({ token });
};

export default loginController;
