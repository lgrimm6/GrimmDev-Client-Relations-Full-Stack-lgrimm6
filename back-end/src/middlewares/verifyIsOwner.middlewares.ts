import { NextFunction, Request, Response } from "express";
import "dotenv/config";

const verifyIsOwnerMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.params.clientId === req.user.id) {
    return next();
  } else {
    return res.status(401).json({ message: "Not the owner" });
  }
};

export default verifyIsOwnerMiddleware;
