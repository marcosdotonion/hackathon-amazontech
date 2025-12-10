import { Router } from "express";
import * as controller from "../controllers/lotes.controller";
import { firebaseAuth } from "../middlewares/auth.middleware";

const router = Router();

router.post("/", firebaseAuth, controller.createLote);

export default router;
