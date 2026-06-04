import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/apiResponse.js";
import questionService from "../services/question.service.js";

export const bulkCreateQuestions = asyncHandler(async (req, res) => {
  const questions = await questionService.bulkCreateQuestions(
    req.body.questions
  );

  return res
    .status(201)
    .json(
      new ApiResponse(
        201,
        questions,
        `Successfully created ${questions.length} questions`
      )
    );
});
