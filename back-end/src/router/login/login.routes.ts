import { Router } from "express";

import userLoginController from "../../controllers/login/loginController";

const router = Router();
router.post("", userLoginController);

export default router;
