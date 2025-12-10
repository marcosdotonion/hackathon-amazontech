import { Router } from "express";

const router = Router();

router.post("/login", (req, res) => {
  return res.json({
    token: "fake-jwt-token-for-now"
  });
});

export default router;
