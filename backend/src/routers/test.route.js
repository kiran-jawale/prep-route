import { Router } from "express";
import {
  getAllTests,
  getTestById,
  createTest,
  updateTest,
} from "../controllers/test.controller.js";
import { isVerified } from "../middlewares/auth.middleware.js";

const router = Router();

router.get("/", isVerified, getAllTests);
router.get("/:id", isVerified, getTestById);
router.post("/", isVerified, createTest);
router.put("/:id", isVerified, updateTest);

export default router;
