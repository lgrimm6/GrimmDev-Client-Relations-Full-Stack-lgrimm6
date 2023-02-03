import { Request, Response } from "express";
import listContactsServices from "../../services/contacts/listContacts.services";

const listContactController = async (req: Request, res: Response) => {
  const clientId: string = req.params.clientId;
  const contacts = await listContactsServices(clientId);
  return res.json({ contacts });
};

export default listContactController;
