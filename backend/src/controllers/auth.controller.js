import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/apiResponse.js";
import authService from "../services/auth.service.js";
import { UX_ERRORS } from "../constants/uxErrors.js";

export const register = asyncHandler(async (req, res) => {
  const user = await authService.register(req.body);

  return res
    .status(201)
    .json(new ApiResponse(201, user, "User registered successfully."));
});

export const login = asyncHandler(async (req, res) => {
  const { userId, password } = req.body;

  if (!userId || !password) {
    return res
      .status(400)
      .json(new ApiResponse(400, null, UX_ERRORS.AUTH.MISSING_FIELDS));
  }

  const { user, accessToken, refreshToken } = await authService.login(
    userId,
    password
  );

  return res
    .status(200)
    .cookie("accessToken", accessToken)
    .cookie("refreshToken", refreshToken)
    .json(
      new ApiResponse(
        200,
        {
          user,
          accessToken,
        },
        "Login successful."
      )
    );
});

export const logout = asyncHandler(async (req, res) => {
  await authService.logout(req.user._id);

  return res
    .clearCookie("accessToken")
    .clearCookie("refreshToken")
    .status(200)
    .json(new ApiResponse(200, {}, "Logout successful."));
});

export const getMyProfile = asyncHandler(async (req, res) => {
  const user = await authService.getMyProfile(req.user._id);

  return res
    .status(200)
    .json(new ApiResponse(200, user, "Profile fetched successfully."));
});

export const refreshToken = asyncHandler(async (req, res) => {
  const incomingRefreshToken = req.cookies.refreshToken;

  const { accessToken, refreshToken } =
    await authService.refreshToken(incomingRefreshToken);

  return res
    .status(200)
    .cookie("accessToken", accessToken, COOKIE_OPTIONS)
    .cookie("refreshToken", refreshToken, COOKIE_OPTIONS)
    .json(new ApiResponse(200, {}, "Authenticated"));
});
