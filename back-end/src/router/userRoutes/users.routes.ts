import { Router } from "express";
import createUserController from "../../controllers/users/createUser.controller";
import deleteUserController from "../../controllers/users/deleteUser.controller";
import listUserController from "../../controllers/users/listUser.controller";
import updateUserController from "../../controllers/users/updateUser.controller";
import verifyAuthTokenMiddleware from "../../middlewares/verifyAuthToken.middlewares";
import verifyIdParams from "../../middlewares/verifyIdParams.middlewares";

const router = Router();

router.post("", createUserController);
router.get(
  "/:uuid",
  verifyIdParams,
  verifyAuthTokenMiddleware,
  listUserController
);
router.patch(
  "/:uuid",
  verifyIdParams,
  verifyAuthTokenMiddleware,
  updateUserController
);
router.delete(
  "/:uuid",
  verifyIdParams,
  verifyAuthTokenMiddleware,
  deleteUserController
);

export default router;
