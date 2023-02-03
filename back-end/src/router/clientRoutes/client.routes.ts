import { Router } from "express";
import createClientController from "../../controllers/clients/createClient.controller";
import deleteClientController from "../../controllers/clients/deleteClient.controller";
import listClientController from "../../controllers/clients/listClient.controller";
import updateClientController from "../../controllers/clients/updateClient.controller";
import verifyAuthTokenMiddleware from "../../middlewares/verifyAuthToken.middlewares";
import verifyIdParams from "../../middlewares/verifyIdParams.middlewares";

const router = Router();

router.post("", createClientController);
router.get(
  "/:clientId",
  verifyIdParams,
  verifyAuthTokenMiddleware,
  listClientController
);
router.patch(
  "/:clientId",
  verifyIdParams,
  verifyAuthTokenMiddleware,
  updateClientController
);
router.delete(
  "/:clientId",
  verifyIdParams,
  verifyAuthTokenMiddleware,
  deleteClientController
);

export default router;
