import { Request, Response } from "express";
import { IUserLogin } from "../../interfaces/login";
import loginServices from "../../services/login/login.services";

const loginController = async (req: Request, res: Response) => {
  const user: IUserLogin = req.body;
  console.log(user);

  const token: string = await loginServices(user);
  return res.json({ token });
};

export default loginController;
