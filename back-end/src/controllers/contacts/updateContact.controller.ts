import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import { IContactUpdate } from "../../interfaces/contact";
import updateContactServices from "../../services/contacts/updateContact.services";

const updateContactController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const clientId = req.user.id;
  const contactId = req.params.contactId;
  const updateData: IContactUpdate = req.body;
  const updatedContact = await updateContactServices(
    clientId,
    contactId,
    updateData
  );
  return res.status(200).json(instanceToPlain(updatedContact));
};
export default updateContactController;
