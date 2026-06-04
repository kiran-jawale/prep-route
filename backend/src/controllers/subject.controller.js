import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/apiResponse.js";
import subjectService from "../services/subject.service.js";

export const getAllSubjects = asyncHandler(async (req, res) => {
  const subjects = await subjectService.getAllSubjects();

  return res
    .status(200)
    .json(new ApiResponse(200, subjects, "Subjects fetched successfully."));
});
