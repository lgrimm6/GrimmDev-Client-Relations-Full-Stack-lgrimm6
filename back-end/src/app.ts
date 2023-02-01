import express, { Request, Response } from "express";
import userRouter from "./router/users.routes";
const app = express();

app.use(express.json());

app.use("/users", userRouter);

export default app;
