import { Router } from "express";

import {
  getAllSubjects,
  getSubjectById,
  createSubject,
  updateSubject,
  deleteSubject,
} from "../controllers/subject.controller.js";

import authMiddleware from "../middlewares/auth.middleware.js";

const router = Router();

router.use(authMiddleware);

router.route("/").get(getAllSubjects).post(createSubject);

router
  .route("/:id")
  .get(getSubjectById)
  .patch(updateSubject)
  .delete(deleteSubject);

export default router;
