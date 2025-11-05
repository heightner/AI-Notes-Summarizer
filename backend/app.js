import express from "express";
import cors from 'cors'

import helmet from "helmet";
import morgan from "morgan";

import summaryRouter from "./routes/Summary.js";

import { config } from "./config/config.js";
import { errorHandler } from "./middlewares/errorHandler.js";

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const allowedOrigins = [
    'https://ai-notes-summarizer-gray.vercel.app/',
]

app.use(cors({
    origin: allowedOrigins,
    methods: ['GET', 'POST']
}))

app.use(helmet())
app.use(morgan("dev"))
app.use(errorHandler)

app.set('trust proxy', 1);

app.use("/api", summaryRouter)

app.get('/health', (req, res) => {
    res.status(200).json({
        status: 'ok',
        uptime: process.uptime(),
        timestamp: Date.now(),
    });
});

app.use((err, req, res, next) => {
    console.error('Unhandled error:', err);
    res.status(500).json({ error: 'Internal Server Error' });
});

app.listen(config.PORT, () => {
    console.log(`Server is running on port ${config.PORT}`)
})