import { Router } from "express";
import createContactController from "../../controllers/contacts/createContacts";
import verifyAuthTokenMiddleware from "../../middlewares/verifyAuthToken.middlewares";

const router = Router();

router.post("", verifyAuthTokenMiddleware, createContactController);

export default router;
