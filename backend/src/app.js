import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from 'morgan'

import errorMiddleware from "./middlewares/error.middleware.js";

import authRouter from "./routers/auth.route.js";
import subjectRouter from "./routers/subject.route.js";
import topicRouter from "./routers/topic.route.js";
import subTopicRouter from "./routers/subTopic.route.js";
import testRouter from "./routers/test.route.js";
import questionRouter from './routers/question.route.js'

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
app.use(morgan('dev'));

app.get("/health", (req, res) => {
  return res.status(200).json({
    success: true,
  });
});

app.use("/api/v1/auth", authRouter);

app.use("/api/v1/subjects", subjectRouter);
app.use("/api/v1/topics", topicRouter);
app.use("/api/v1/sub-topics", subTopicRouter);
app.use("/api/v1/tests", testRouter);
app.use("/api/v1/questions", questionRouter);

app.get('/api/v1',(req,res) => {
  res.json({message: "Server is healthy"})
})

app.use(errorMiddleware);

export { app };
