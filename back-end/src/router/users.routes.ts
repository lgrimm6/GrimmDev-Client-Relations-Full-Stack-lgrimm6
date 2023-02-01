import { Request, Response, Router } from "express";

const router = Router();

router.get("", (req: Request, res: Response) => {
  console.log(req);

  return res.status(200).json("teste get");
});

export default router;
