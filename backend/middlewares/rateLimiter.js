import { config } from "../config/config.js";
import rateLimit from "express-rate-limit";

export const rateLimiter = rateLimit({
    windowMs: config.RATE_LIMIT_windowMs,
    max: config.RATE_LIMIT_max,
    message: config.RATE_LIMIT_message
})