import { Router } from "express";
import { rateLimiter } from "../middleware/rateLimiter.js";
import { validateIntake } from "../middleware/validator.js";
import { sendIntakeEmail } from "../services/mailer.js";
import { notifySlack } from "../services/notifier.js";

const router = Router();

router.post("/", rateLimiter, validateIntake, async (req, res) => {
  const payload = req.body;

  try {
    await Promise.all([sendIntakeEmail(payload), notifySlack(payload)]);
    res.status(201).json({ received: true });
  } catch (err) {
    console.error("intake dispatch failed:", err);
    res.status(502).json({ received: false, error: "dispatch_failed" });
  }
});

export default router;
