import { Router } from "express";
import createUserController from "../../controllers/users/createUser.controller";
import deleteUserController from "../../controllers/users/deleteUser.controller";
import listUserController from "../../controllers/users/listUser.controller";
import verifyIdParams from "../../middlewares/verifyIdParams.middlewares";

const router = Router();

router.post("", createUserController);
router.get("/:uuid", verifyIdParams, listUserController);
router.delete("/:uuid", verifyIdParams, deleteUserController);

export default router;
