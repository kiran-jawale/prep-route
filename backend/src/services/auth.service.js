import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";
import ApiError from "../utils/apiError.js";
import { UX_ERRORS } from "../constants/uxErrors.js";
import { withMetrics } from "../utils/metricsLogger.js";
import CONFIG from "../constants/config.js";
import { COOKIE_OPTIONS } from "../constants/config.js";

class AuthService {
  async register(data) {
    return await withMetrics("REGISTER_USER", async () => {
      const { userId, email, fullName, password } = data;

      if (!userId || !email || !fullName || !password) {
        throw new ApiError(400, UX_ERRORS.AUTH.MISSING_FIELDS);
      }

      const existingUser = await User.findOne({
        $or: [{ userId }, { email }],
      });

      if (existingUser) {
        throw new ApiError(409, UX_ERRORS.AUTH.ALREADY_EXISTS);
      }

      const user = await User.create({
        userId,
        email,
        fullName,
        password,
      });

      return await User.findById(user._id).select("-refreshToken");
    });
  }

  async getMyProfile(userId) {
    return await withMetrics("GET_MY_PROFILE", async () => {
      const user = await User.findById(userId).select("-refreshToken");

      if (!user) {
        throw new ApiError(404, UX_ERRORS.AUTH.NOT_FOUND);
      }

      return user;
    });
  }

   async generateTokens(userId) {
    const user = await User.findById(userId).select("+refreshToken");

    const accessToken = await user.generateAccessToken();
    const refreshToken = await user.generateRefreshToken();

    user.refreshToken = refreshToken;

    await user.save({
      validateBeforeSave: false,
    });

    return {
      accessToken,
      refreshToken,
    };
  }

  async login(identifier, password) {
    const user = await User.findOne({
      $or: [
        { userId: identifier },
        { email: identifier },
      ],
    }).select("+password +refreshToken");

    if (!user) {
      throw new ApiError(
        401,
        UX_ERRORS.AUTH.INVALID_CREDS
      );
    }

    const isPasswordCorrect =
      await user.isPasswordCorrect(password);

    if (!isPasswordCorrect) {
      throw new ApiError(
        401,
        UX_ERRORS.AUTH.INVALID_CREDS
      );
    }

    const { accessToken, refreshToken } =
      await this.generateTokens(user._id);

    const userData = await User.findById(user._id);

    return {
      user: userData,
      accessToken,
      refreshToken,
    };
  }

  async refreshToken(incomingRefreshToken) {
    if (!incomingRefreshToken) {
      throw new ApiError(
        401,
        UX_ERRORS.AUTH.UNAUTHORIZED
      );
    }

    const decoded = jwt.verify(
      incomingRefreshToken,
      CONFIG.REFRESH_TOKEN_SECRET
    );

    const user = await User.findById(decoded._id)
      .select("+refreshToken");

    if (!user) {
      throw new ApiError(
        401,
        UX_ERRORS.AUTH.UNAUTHORIZED
      );
    }

    if (user.refreshToken !== incomingRefreshToken) {
      throw new ApiError(
        401,
        UX_ERRORS.AUTH.UNAUTHORIZED
      );
    }

    return await this.generateTokens(user._id);
  }

  async logout(userId) {
    await User.findByIdAndUpdate(
      userId,
      {
        $unset: {
          refreshToken: 1,
        },
      }
    );
  }
 
}

export default new AuthService();
