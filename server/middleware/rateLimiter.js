import rateLimit from "express-rate-limit";

// Caps intake submissions per IP to deter spam/bot abuse.
export const rateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: { received: false, error: "too_many_requests" },
});
