import { Request, Response } from "express";
import generatePdfServices from "../../services/pdf/generatePdf.services";

const generatePdfController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const clientId: string = req.user.id;
  const pdfBuffer: Buffer = await generatePdfServices(clientId);
  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Disposition", "attachment; filename=client_data.pdf");
  return res.send(pdfBuffer);
};

export default generatePdfController;
