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

const app = express();

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

app.get("/health", (req, res) => {
  return res.status(200).json({
    success: true,
  });
});

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
