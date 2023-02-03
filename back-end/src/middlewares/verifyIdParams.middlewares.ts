import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/appError";

const verifyIdParams = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const regexUuid =
    /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/;
  if (req.params.clientId) {
    const clientId = req.params.clientId;
    const isRegex = regexUuid.test(clientId);
    if (!isRegex) {
      throw new AppError(400, "id must be a valid uuid");
    }
  }
  if (req.params.contactId) {
    const contactId = req.params.contactId;
    const isRegex = regexUuid.test(contactId);
    if (!isRegex) {
      throw new AppError(400, "id must be a valid uuid");
    }
  }
  return next();
};

export default verifyIdParams;
