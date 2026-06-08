import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

import { CONFIG } from "../constants/config.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const INSIGHTS_FILE = path.join(__dirname, "../../insights/insights.json");

const DEFAULT_INSIGHTS = {
  API_REQUESTS: [],
  DB_OPS: {},
  OTHER_LOGS: {},
};

const loadInsights = () => {
  if (!fs.existsSync(INSIGHTS_FILE)) {
    return DEFAULT_INSIGHTS;
  }

  const content = fs.readFileSync(INSIGHTS_FILE, "utf-8");

  if (!content) {
    return DEFAULT_INSIGHTS;
  }

  try {
    return JSON.parse(content);
  } catch {
    return DEFAULT_INSIGHTS;
  }
};

const saveInsights = (data) => {
  fs.writeFileSync(INSIGHTS_FILE, JSON.stringify(data, null, 2));
};

export const withMetrics = async (
  operationName,
  asyncFunction,
  enabled = CONFIG.GET_METRICS
) => {
  const start = performance.now();

  try {
    const result = await asyncFunction();

    if (!enabled) {
      return result;
    }

    const end = performance.now();

    const data = loadInsights();

    if (!data.DB_OPS[operationName]) {
      data.DB_OPS[operationName] = [];
    }

    if (data.DB_OPS[operationName].length >= 100) {
      data.DB_OPS[operationName].shift();
    }

    data.DB_OPS[operationName].push({
      timestamp: new Date().toISOString(),
      latencyMs: Number((end - start).toFixed(2)),
    });

    saveInsights(data);

    return result;
  } catch (error) {
    console.error(`[METRICS ERROR] ${operationName}`, error.message);

    throw error;
  }
};

export const withOtherMetrics = async (
  operationName,
  asyncFunction,
  enabled = CONFIG.GET_METRICS
) => {
  const start = performance.now();

  try {
    const result = await asyncFunction();

    if (!enabled) {
      return result;
    }

    const end = performance.now();

    const data = loadInsights();

    if (!data.OTHER_LOGS[operationName]) {
      data.OTHER_LOGS[operationName] = [];
    }

    if (data.OTHER_LOGS[operationName].length >= 100) {
      data.OTHER_LOGS[operationName].shift();
    }

    data.OTHER_LOGS[operationName].push({
      timestamp: new Date().toISOString(),
      latencyMs: Number((end - start).toFixed(2)),
    });

    saveInsights(data);

    return result;
  } catch (error) {
    console.error(`[OTHER METRICS ERROR] ${operationName}`, error.message);

    throw error;
  }
};

export const morganStream = {
  write: (message) => {
    const cleanMessage = message.trim();

    console.log(`[API LOG] ${cleanMessage}`);

    if (!CONFIG.GET_METRICS) {
      return;
    }

    try {
      const data = loadInsights();

      if (data.API_REQUESTS.length >= 100) {
        data.API_REQUESTS.shift();
      }

      data.API_REQUESTS.push({
        timestamp: new Date().toISOString(),
        log: cleanMessage,
      });

      saveInsights(data);
    } catch (error) {
      console.error("[MORGAN ERROR]", error.message);
    }
  },
};
