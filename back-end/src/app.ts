import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import { AppError } from "./errors/appError";
import userRouter from "./router/userRoutes/users.routes";
import contactRouter from "./router/contactRoutes/contact.routes";
const app = express();

app.use(express.json());

app.use("/users", userRouter);
app.use("/users/contact", contactRouter);

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
