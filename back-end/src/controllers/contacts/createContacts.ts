import { Request, Response } from "express";
import createContactServices from "../../services/contacts/createContact.services";

const createContactController = async (req: Request, res: Response) => {
  const clientIdToken: string = req.user.id;
  const contactData = req.body;
  const contactCreated = await createContactServices(
    clientIdToken,
    contactData
  );

  return res.status(201).json(contactCreated);
};

export default createContactController;
