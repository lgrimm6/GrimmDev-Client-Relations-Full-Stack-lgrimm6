import { Request, Response } from "express";
import deleteContactServices from "../../services/contacts/deleteContact.services";

const deletedContactController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const clientId: string = req.user.id;
  const contactId: string = req.params.contactId;
  console.log(clientId, contactId);

  await deleteContactServices(clientId, contactId);
  return res.status(200).json({ msg: "contact deleted" });
};
export default deletedContactController;
