import { Router } from "express";
import { getSubTopicsByTopic } from "../controllers/subTopic.controller.js";
import { isVerified } from "../middlewares/auth.middleware.js";

const router = Router();

router.get("/topic/:topicId", isVerified, getSubTopicsByTopic);

export default router;
