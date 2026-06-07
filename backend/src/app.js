import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from 'morgan'
import { morganStream } from "./utils/metricsLogger.js";

import errorMiddleware from "./middlewares/error.middleware.js";

import authRouter from "./routers/auth.route.js";
import subjectRouter from "./routers/subject.route.js";
import topicRouter from "./routers/topic.route.js";
import subTopicRouter from "./routers/subTopic.route.js";
import testRouter from "./routers/test.route.js";
import questionRouter from './routers/question.route.js'
import CONFIG from "./constants/config.js";
import ApiResponse from "./utils/apiResponse.js";

const app = express();
const healthController = (req, res) => {
  return res.json(new ApiResponse(200,{message:"Server is listening..."}))
}

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(cookieParser());
app.use(
  morgan(":method :url | :status | :response-time ms", { stream: morganStream })
);

app.get("/api/v1",healthController).get('/api/v1/health',healthController)

app.use(CONFIG.API_VERSION+ "/auth", authRouter);

app.use(CONFIG.API_VERSION+ "/subjects", subjectRouter);
app.use(CONFIG.API_VERSION+ "/topics", topicRouter);
app.use(CONFIG.API_VERSION+ "/sub-topics", subTopicRouter);
app.use(CONFIG.API_VERSION+ "/tests", testRouter);
app.use(CONFIG.API_VERSION+ "/questions", questionRouter);

app.use(CONFIG.API_VERSION+ "/health",(req,res) => {
  res.json({message: "Server is healthy"})
})

app.use(errorMiddleware);

export { app };
