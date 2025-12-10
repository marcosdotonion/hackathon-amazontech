import { Request, Response } from "express";

export async function createLote(req: Request, res: Response) {
  return res.json({
    message: "Lote created (stub)"
  });
}

