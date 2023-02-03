import { Router } from "express";
import createContactController from "../../controllers/contacts/createContacts";
import listContactController from "../../controllers/contacts/listContacts";
import updateContactController from "../../controllers/contacts/updateContact.controller";
import verifyAuthTokenMiddleware from "../../middlewares/verifyAuthToken.middlewares";
import verifyIdParams from "../../middlewares/verifyIdParams.middlewares";

const router = Router();

router.post("/contact", verifyAuthTokenMiddleware, createContactController);
router.get(
  "/:clientId/contact",
  verifyIdParams,
  verifyAuthTokenMiddleware,
  listContactController
);
router.patch(
  "/:clientId/contact/:contactId",
  verifyIdParams,
  verifyAuthTokenMiddleware,
  updateContactController
);

export default router;
