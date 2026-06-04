import { Router } from "express";
import {
  register,
  login,
  logout,
  getMyProfile,
  refreshToken,
} from "../controllers/auth.controller.js";
import { isVerified } from "../middlewares/auth.middleware.js";

const router = Router();

router.post("/register", register);
router.post("/login", login);

router.post("/refresh-token", refreshToken);

router.post("/logout", isVerified, logout);
router.get("/me", isVerified, getMyProfile);

export default router;
