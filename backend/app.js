import express from "express";

import helmet from "helmet";
import morgan from "morgan";

import summaryRouter from "./routes/Summary.js";

import { config } from "./config/config.js";

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(helmet())
app.use(morgan("dev"))

app.use("/api", summaryRouter)

app.listen(config.PORT, () => {
    console.log(`Server is running on port ${config.PORT}`)
})