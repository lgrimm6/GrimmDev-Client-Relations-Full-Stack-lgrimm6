import { Router } from "express";

import loginController from "../../controllers/login/loginController";
import profileController from "../../controllers/login/profile.controller";
import verifyAuthTokenMiddleware from "../../middlewares/verifyAuthToken.middlewares";

const router = Router();
router.post("/login", loginController);
router.get("/profile", verifyAuthTokenMiddleware, profileController);

export default router;
