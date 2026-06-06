import { Router } from "express";

import verifyJWT from "../middlewares/auth.middleware.js";

import {
  getSubTopicsByTopic,
  getSubTopicById,
  createSubTopic,
  updateSubTopic,
  deleteSubTopic,
} from "../controllers/subTopic.controller.js";

const router = Router();

router.use(verifyJWT);

router.route("/").post(createSubTopic);

router.route("/topic/:topicId").get(getSubTopicsByTopic);

router
  .route("/:id")
  .get(getSubTopicById)
  .patch(updateSubTopic)
  .delete(deleteSubTopic);

export default router;
