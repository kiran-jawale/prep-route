import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import errorMiddleware from "./middlewares/error.middleware.js";

import authRouter from "./routes/auth.route.js";
import subjectRouter from "./routes/subject.route.js";
import topicRouter from "./routes/topic.route.js";
import subTopicRouter from "./routes/subTopic.route.js";
import testRouter from "./routes/test.route.js";
import questionRouter from "./routes/question.route.js";

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

app.use(errorMiddleware);

export { app };
