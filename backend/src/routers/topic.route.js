import { Router } from "express";
import { getTopicsBySubject } from "../controllers/topic.controller.js";
import { isVerified } from "../middlewares/auth.middleware.js";

const router = Router();

router.get("/subject/:subjectId", isVerified, getTopicsBySubject);

export default router;
