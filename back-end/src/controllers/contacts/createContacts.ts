import { Request, Response } from "express";
import createContactServices from "../../services/contacts/createContact.services";

const createContactController = async (req: Request, res: Response) => {
  const userId: string = req.user.id;
  const contactData = req.body;
  const contactCreated = await createContactServices(userId, contactData);

  return res.json({ contactData });
};

export default createContactController;
