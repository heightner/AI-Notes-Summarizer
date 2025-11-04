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

app.use(cors({
    origin: 'http://localhost:5173'
}))

app.use(helmet())
app.use(morgan("dev"))
app.use(errorHandler)

app.use("/api", summaryRouter)

app.get('/health', (req, res) => {
    res.status(200).json({
        status: 'ok',
        uptime: process.uptime(),
        timestamp: Date.now(),
    });
});


app.listen(config.PORT, () => {
    console.log(`Server is running on port ${config.PORT}`)
})