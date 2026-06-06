import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/apiResponse.js";
import subjectService from "../services/subject.service.js";

export const getAllSubjects = asyncHandler(async (req, res) => {
  const subjects = await subjectService.getAllSubjects();

  return res
    .status(200)
    .json(new ApiResponse(200, subjects, "Subjects fetched successfully."));
});

export const getSubjectById = asyncHandler(async (req, res) => {
  const subject = await subjectService.getSubjectById(req.params.id);

  return res
    .status(200)
    .json(new ApiResponse(200, subject, "Subject fetched successfully."));
});

export const createSubject = asyncHandler(async (req, res) => {
  const subject = await subjectService.createSubject(req.body);

  return res
    .status(201)
    .json(new ApiResponse(201, subject, "Subject created successfully."));
});

export const updateSubject = asyncHandler(async (req, res) => {
  const subject = await subjectService.updateSubject(req.params.id, req.body);

  return res
    .status(200)
    .json(new ApiResponse(200, subject, "Subject updated successfully."));
});

export const deleteSubject = asyncHandler(async (req, res) => {
  await subjectService.deleteSubject(req.params.id);

  return res
    .status(200)
    .json(new ApiResponse(200, {}, "Subject deleted successfully."));
});
