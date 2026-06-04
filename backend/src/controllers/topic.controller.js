import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/apiResponse.js";
import topicService from "../services/topic.service.js";

export const getTopicsBySubject = asyncHandler(async (req, res) => {
  const topics = await topicService.getTopicsBySubject(req.params.subjectId);

  return res
    .status(200)
    .json(new ApiResponse(200, topics, "Topics fetched successfully."));
});
