import { Router } from "express";
import createUserController from "../../controllers/users/createUser.controller";
import deleteUserController from "../../controllers/users/deleteUser.controller";
import verifyIdParams from "../../middlewares/verifyIdParams.middlewares";

const router = Router();

router.post("", createUserController);
router.delete("/:uuid", verifyIdParams, deleteUserController);

export default router;
