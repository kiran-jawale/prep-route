import { Router } from "express";

import verifyJWT from "../middlewares/auth.middleware.js";

import {
  getAllTests,
  getTestById,
  createTest,
  updateTest,
  deleteTest,
} from "../controllers/test.controller.js";

const router = Router();

router.use(verifyJWT);

router.route("/").get(getAllTests).post(createTest);

router.route("/:id").get(getTestById).patch(updateTest).delete(deleteTest);

export default router;
