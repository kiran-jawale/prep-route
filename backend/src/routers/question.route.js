import { Router } from "express";
import { bulkCreateQuestions } from "../controllers/question.controller.js";
import { isVerified } from "../middlewares/auth.middleware.js";

const router = Router();

router.post("/bulk", isVerified, bulkCreateQuestions);

export default router;
