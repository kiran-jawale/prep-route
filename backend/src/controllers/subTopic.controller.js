import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/apiResponse.js";
import subTopicService from "../services/subTopic.service.js";

export const getSubTopicsByTopic = asyncHandler(async (req, res) => {
  const subTopics = await subTopicService.getSubTopicsByTopic(
    req.params.topicId
  );

  return res
    .status(200)
    .json(new ApiResponse(200, subTopics, "Sub topics fetched successfully."));
});
