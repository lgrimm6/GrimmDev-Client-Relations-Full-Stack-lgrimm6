import express, { NextFunction, Request, Response } from "express";
import { AppError } from "./errors/appError";
import userRouter from "./router/users.routes";
const app = express();

app.use(express.json());

app.use("/users", userRouter);

app.use((err: Error, Request: Request, response: Response, _: NextFunction) => {
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
