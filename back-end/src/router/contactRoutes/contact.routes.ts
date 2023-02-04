import { Router } from "express";
import createContactController from "../../controllers/contacts/createContacts";
import listContactController from "../../controllers/contacts/listContacts";
import updateContactController from "../../controllers/contacts/updateContact.controller";
import deleteContactController from "../../controllers/contacts/deleteContact.controller";
import verifyAuthTokenMiddleware from "../../middlewares/verifyAuthToken.middlewares";
import verifyIdParams from "../../middlewares/verifyIdParams.middlewares";
import verifyIsOwnerMiddleware from "../../middlewares/verifyIsOwner.middlewares";
import verifyUpdateData from "../../middlewares/verifyUpdateData.middlewares";

const router = Router();

router.post("/contact", verifyAuthTokenMiddleware, createContactController);
router.get(
  "/:clientId/contact",
  verifyIdParams,
  verifyAuthTokenMiddleware,
  verifyIsOwnerMiddleware,
  listContactController
);
router.patch(
  "/:clientId/contact/:contactId",
  verifyIdParams,
  verifyAuthTokenMiddleware,
  verifyIsOwnerMiddleware,
  verifyUpdateData,
  updateContactController
);
router.delete(
  "/:clientId/contact/:contactId",
  verifyIdParams,
  verifyAuthTokenMiddleware,
  verifyIsOwnerMiddleware,
  deleteContactController
);

export default router;
