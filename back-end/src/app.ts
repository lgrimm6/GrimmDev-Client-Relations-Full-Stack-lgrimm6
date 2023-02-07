import "express-async-errors";
import "reflect-metadata";
import cors from "cors";

import express, { NextFunction, Request, Response } from "express";
import { AppError } from "./errors/appError";
import clientRouter from "./router/clientRoutes/client.routes";
import contactRouter from "./router/contactRoutes/contact.routes";
import loginRouter from "./router/login/login.routes";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/clients", loginRouter);
app.use("/clients", clientRouter);
app.use("/clients", contactRouter);

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: "error",
      message: err.message,
    });
  }
  console.error(err);
  return response
    .status(500)
    .json({ status: "error", message: "Internal server error" });
});

export default app;
