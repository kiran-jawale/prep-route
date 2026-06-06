import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/apiResponse.js";
import topicService from "../services/topic.service.js";

export const getTopicsBySubject = asyncHandler(async (req, res) => {
  const topics = await topicService.getTopicsBySubject(req.params.subjectId);

  return res
    .status(200)
    .json(new ApiResponse(200, topics, "Topics fetched successfully."));
});

export const getTopicById = asyncHandler(async (req, res) => {
  const topic = await topicService.getTopicById(req.params.id);

  return res
    .status(200)
    .json(new ApiResponse(200, topic, "Topic fetched successfully."));
});

export const createTopic = asyncHandler(async (req, res) => {
  const topic = await topicService.createTopic(req.body);

  return res
    .status(201)
    .json(new ApiResponse(201, topic, "Topic created successfully."));
});

export const updateTopic = asyncHandler(async (req, res) => {
  const topic = await topicService.updateTopic(req.params.id, req.body);

  return res
    .status(200)
    .json(new ApiResponse(200, topic, "Topic updated successfully."));
});

export const deleteTopic = asyncHandler(async (req, res) => {
  await topicService.deleteTopic(req.params.id);

  return res
    .status(200)
    .json(new ApiResponse(200, {}, "Topic deleted successfully."));
});
