import { Request, Response } from "express";

const createContactController = async (req: Request, res: Response) => {
  const userId: string = req.user.id;
  const contectData = req.body;
  return res.json({ contectData });
};

export default createContactController;
