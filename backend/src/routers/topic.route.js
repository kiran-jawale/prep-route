import { Router } from "express";

import verifyJWT from "../middlewares/auth.middleware.js";

import {
  getTopicsBySubject,
  getTopicById,
  createTopic,
  updateTopic,
  deleteTopic,
} from "../controllers/topic.controller.js";

const router = Router();

router.use(verifyJWT);

router.route("/").post(createTopic);

router.route("/subject/:subjectId").get(getTopicsBySubject);

router.route("/:id").get(getTopicById).patch(updateTopic).delete(deleteTopic);

export default router;
