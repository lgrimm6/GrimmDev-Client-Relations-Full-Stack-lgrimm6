import { Router } from "express";
import createUserController from "../../controllers/users/createUser.controller";
import deleteUserController from "../../controllers/users/deleteUser.controller";
import listUserController from "../../controllers/users/listUser.controller";
import updateUserController from "../../controllers/users/updateUser.controller";
import verifyIdParams from "../../middlewares/verifyIdParams.middlewares";

const router = Router();

router.post("", createUserController);
router.get("/:uuid", verifyIdParams, listUserController);
router.patch("/:uuid", verifyIdParams, updateUserController);
router.delete("/:uuid", verifyIdParams, deleteUserController);

export default router;
