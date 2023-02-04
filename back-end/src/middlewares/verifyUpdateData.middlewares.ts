import { NextFunction, Request, Response } from "express";
import { IDataCannotUpdate } from "../interfaces/updateData";

const verifyUpdateData = (
  req: Request,
  res: Response,
  next: NextFunction
): void | Response => {
  const update: IDataCannotUpdate = req.body;
  const keys: string[] = Object.keys(update);
  for (let i = 0; i < keys.length; i++) {
    if (!["name", "username", "phone", "email"].includes(keys[i])) {
      return res.status(401).json({
        message: `form not allowed <${keys[i]}>`,
      });
    }
  }
  return next();
};

export default verifyUpdateData;
