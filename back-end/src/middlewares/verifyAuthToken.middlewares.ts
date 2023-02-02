import { NextFunction, Request, Response } from "express";
import "dotenv/config";
import jwt from "jsonwebtoken";

const verifyAuthTokenMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let token: string | undefined = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: "Missing authorization headers" });
  }
  if (token.includes("Bearer")) {
    token = token.split(" ")[1];
  }
  jwt.verify(token, process.env.SECRET_KEY as string, (error, decoded: any) => {
    if (error) {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }
    req.user = {
      id: decoded.id,
    };
    return next();
  });
};

export default verifyAuthTokenMiddleware;
