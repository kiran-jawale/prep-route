import { Router } from "express";
import { getAllSubjects } from "../controllers/subject.controller.js";
import { isVerified } from "../middlewares/auth.middleware.js";

const router = Router();

router.get("/", isVerified, getAllSubjects);

export default router;
