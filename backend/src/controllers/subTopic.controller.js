import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/apiResponse.js";
import subTopicService from "../services/subTopic.service.js";

export const getSubTopicsByTopic = asyncHandler(async (req, res) => {
  const subTopics = await subTopicService.getSubTopicsByTopic(
    req.params.topicId
  );

  return res
    .status(200)
    .json(new ApiResponse(200, subTopics, "SubTopics fetched successfully."));
});

export const getAllSubTopics = asyncHandler(async (req, res) => {
  const subTopics = await subTopicService.getAllSubTopics();

  return res
    .status(200)
    .json(new ApiResponse(200, subTopics, "SubTopics fetched successfully."));
});

export const getSubTopicById = asyncHandler(async (req, res) => {
  const subTopic = await subTopicService.getSubTopicById(req.params.id);

  return res
    .status(200)
    .json(new ApiResponse(200, subTopic, "SubTopic fetched successfully."));
});

export const createSubTopic = asyncHandler(async (req, res) => {
  const subTopic = await subTopicService.createSubTopic(req.body);

  return res
    .status(201)
    .json(new ApiResponse(201, subTopic, "SubTopic created successfully."));
});

export const updateSubTopic = asyncHandler(async (req, res) => {
  const subTopic = await subTopicService.updateSubTopic(
    req.params.id,
    req.body
  );

  return res
    .status(200)
    .json(new ApiResponse(200, subTopic, "SubTopic updated successfully."));
});

export const deleteSubTopic = asyncHandler(async (req, res) => {
  await subTopicService.deleteSubTopic(req.params.id);

  return res
    .status(200)
    .json(new ApiResponse(200, {}, "SubTopic deleted successfully."));
});
