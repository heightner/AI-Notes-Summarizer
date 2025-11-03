import { Router } from "express";
import { getSummary } from "../controllers/summaryController.js";
import { rateLimiter } from "../middlewares/rateLimiter.js";

const summaryRouter = Router()

summaryRouter.post("/summary", rateLimiter, getSummary)

export default summaryRouter