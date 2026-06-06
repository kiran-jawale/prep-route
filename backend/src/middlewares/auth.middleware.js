import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";
import { ApiError } from "../utils/apiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { UX_ERRORS } from "../constants/uxErrors.js";
import CONFIG from "../constants/config.js";
import ApiResponse from "../utils/apiResponse.js";

const isVerified = asyncHandler(async (req, res, next) => {
  try {
    const token =
      req.cookies?.accessToken ||
      req.header("Authorization")?.replace("Bearer ", "");

    const decoded = jwt.verify(token, CONFIG.ACCESS_TOKEN_SECRET);
    const user = await User.findById(decoded._id).select(
      "-password -refreshToken"
    );

    req.user = user;

    next();
  } catch {
    return res.status(401).json(new ApiResponse(401, null, "Unauthorized"));
  }
});

export {isVerified}

export default isVerified