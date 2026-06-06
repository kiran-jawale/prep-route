import { Router } from "express";

import verifyJWT from "../middlewares/auth.middleware.js";

import {
  bulkCreateQuestions,
} from "../controllers/question.controller.js";

const router = Router();

router.use(verifyJWT);

router.route("/bulk").post(bulkCreateQuestions);


export default router;
