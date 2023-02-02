import { Router } from "express";
import createUserController from "../../controllers/users/createUser.controller";

const router = Router();

router.post("", createUserController);

export default router;
