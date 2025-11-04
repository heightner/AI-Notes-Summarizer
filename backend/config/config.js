import dotenv from "dotenv";
dotenv.config();

export const config = {
    PORT: process.env.PORT || 3000,
    RATE_LIMIT_windowMs: 15 * 60 * 1000,
    RATE_LIMIT_max: 100,
    RATE_LIMIT_message: "Too many requests, please try again later.",
    API_KEY: process.env.API_KEY 
}