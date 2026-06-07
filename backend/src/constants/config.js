import dotenv from "dotenv";

dotenv.config();

const CONFIG = {
  PORT: process.env.PORT,
  APP_NAME: process.env.APP_NAME,
  NODE_ENV: process.env.NODE_ENV ?? "development",
  API_VERSION: process.env.API_VERSION ?? "/api/v1",

  MONGODB_URI: process.env.MONGODB_URI,

  ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET,
  ACCESS_TOKEN_EXPIRY: process.env.ACCESS_TOKEN_EXPIRY,

  REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET,
  REFRESH_TOKEN_EXPIRY: process.env.REFRESH_TOKEN_EXPIRY,

  CORS_ORIGIN: process.env.CORS_ORIGIN,

};

export const COOKIE_OPTIONS = {
  httpOnly: true,
  secure: CONFIG.NODE_ENV === "production",
  sameSite: CONFIG.NODE_ENV === "production" ? "none" : "lax",
};

export default CONFIG
export {CONFIG}