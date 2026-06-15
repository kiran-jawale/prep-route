import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/apiResponse.js";
import testService from "../services/test.service.js";

export const getAllTests = asyncHandler(async (req, res) => {
  const page = Number(req.query.page) || 1;

  const limit = Number(req.query.limit) || 20;

  const tests = await testService.getAllTests(req.user._id, page, limit);

  return res
    .status(200)
    .json(new ApiResponse(200, tests, "Tests fetched successfully."));
});

export const getTestById = asyncHandler(async (req, res) => {
  const test = await testService.getTestById(req.params.id, req.user._id);

  return res
    .status(200)
    .json(new ApiResponse(200, test, "Test fetched successfully."));
});

export const getDashboardStats = asyncHandler(async (req, res) => {
  const stats = await testService.getDashboardStats();

  return res
    .status(200)
    .json(new ApiResponse(200, stats, "Dashboard stats fetched."));
});

export const createTest = asyncHandler(async (req, res) => {
  const test = await testService.createTest(req.user._id, req.body);

  return res
    .status(201)
    .json(new ApiResponse(201, test, "Test created successfully."));
});

export const updateTest = asyncHandler(async (req, res) => {
  const test = await testService.updateTest(
    req.params.id,
    req.user._id,
    req.body
  );

  return res
    .status(200)
    .json(new ApiResponse(200, test, "Test updated successfully."));
});

export const deleteTest = asyncHandler(async (req, res) => {
  await testService.deleteTest(req.params.id, req.user._id);

  return res
    .status(200)
    .json(new ApiResponse(200, {}, "Test deleted successfully."));
});

export const updateMarkingScheme = asyncHandler(async (req, res) => {

  const test = await testService.updateMarkingScheme(
    req.params.id,
    req.user._id,
    req.body
  );

  return res
    .status(200)
    .json(new ApiResponse(200, test, "Marking scheme updated successfully."));
});
