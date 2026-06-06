import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/apiResponse.js";

import questionService from "../services/question.service.js";

export const bulkCreateQuestions = asyncHandler(async (req, res) => {
  const { testId, questions } = req.body;

  const savedQuestions = await questionService.saveQuestions(testId, questions);

  return res
    .status(200)
    .json(
      new ApiResponse(200, savedQuestions, "Questions saved successfully.")
    );
});
