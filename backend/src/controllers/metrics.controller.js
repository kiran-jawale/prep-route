import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

import ApiResponse from "../utils/apiResponse.js";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const INSIGHTS_FILE = path.join(__dirname, "../../insights/insights.json");
const DEFAULT_INSIGHTS = {
  API_REQUESTS: [],
  DB_OPS: {},
  OTHER_LOGS: {},
};

const getMetrics = async (req, res) => {
  try {
    if (!fs.existsSync(INSIGHTS_FILE)) {
      return res
        .status(200)
        .json(new ApiResponse(200, DEFAULT_INSIGHTS, "No metrics available"));
    }

    const content = fs.readFileSync(INSIGHTS_FILE, "utf-8");

    const data = content ? JSON.parse(content) : DEFAULT_INSIGHTS;

    return res
      .status(200)
      .json(new ApiResponse(200, data, "Metrics fetched successfully"));
  } catch {
    return res
      .status(200)
      .json(new ApiResponse(200, DEFAULT_INSIGHTS, "Metrics unavailable"));
  }
};

export default getMetrics;
