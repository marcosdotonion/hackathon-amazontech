import { Request, Response, NextFunction } from "express";

export function firebaseAuth(req: Request, res: Response, next: NextFunction) {
  // For now: allow everything
  next();
}

