import jsPDF from "jspdf";
import AppDataSource from "../../data-source";
import { Client } from "../../entities/client.entity";
import { AppError } from "../../errors/appError";

const generatePdfServices = async (clientId: string) => {
  const clientRepository = AppDataSource.getRepository(Client);
  const client: Client | null = await clientRepository.findOneBy({
    id: clientId,
  });

  if (!client) {
    throw new AppError(403, "Client does not exist");
  }

  const pdf = new jsPDF();
  pdf.setFontSize(40);
  pdf.text(`FICHA DO CLIENTE`, 40, 15);
  pdf.setFontSize(18);
  pdf.text(`Nome: ${client.name}`, 10, 30);
  pdf.text(`Phone: ${client.phone}`, 130, 30);
  pdf.text(`Email: ${client.email}`, 10, 40);
  pdf.text(`Registro: ${String(client.createdAt).slice(4, 15)}`, 130, 40);
  pdf.setFontSize(28);
  pdf.text("Lista de Contatos", 60, 55);
  pdf.setFontSize(14);
  let heighLeft = 65;
  let heighNewPage = 250;
  let index = 1;
  client.contact.forEach((contact) => {
    pdf.text(`Nome: ${contact.name}`, 10, heighLeft);
    heighLeft += 10;
    pdf.text(`Phone: ${contact.phone}`, 10, heighLeft);
    heighLeft += 10;
    pdf.text(`Email: ${contact.email}`, 10, heighLeft);
    heighLeft += 10;

    if (heighLeft >= heighNewPage) {
      heighLeft = 20;
      pdf.addPage();
      index++;
      pdf.setPage(index);
      pdf.text(`Nome: ${contact.name}`, 10, heighLeft);
      heighLeft += 10;
      pdf.text(`Phone: ${contact.phone}`, 10, heighLeft);
      heighLeft += 10;
      pdf.text(`Email: ${contact.email}`, 10, heighLeft);
      heighLeft += 10;
      heighNewPage = 250;
    }
  });

  const pdfBuff = pdf.output();
  const buff = Buffer.from(pdfBuff);
  return buff;
};

export default generatePdfServices;
