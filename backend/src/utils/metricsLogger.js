import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const INSIGHTS_FILE = path.resolve(__dirname, "../../insights/insights.json");

const getInsights = () => {
  try {
    if (!fs.existsSync(INSIGHTS_FILE)) {
      fs.writeFileSync(INSIGHTS_FILE, JSON.stringify({}, null, 2));

      return {};
    }

    const content = fs.readFileSync(INSIGHTS_FILE, "utf8");

    if (!content.trim()) {
      return {};
    }

    return JSON.parse(content);
  } catch (error) {
    console.error("[INSIGHTS FILE ERROR]", error.message);

    return {};
  }
};

const saveInsights = (data) => {
  try {
    fs.writeFileSync(INSIGHTS_FILE, JSON.stringify(data, null, 2), "utf8");
  } catch (error) {
    console.error("[INSIGHTS SAVE ERROR]", error.message);
  }
};

export const morganStream = {
  write: (message) => {
    const insights = getInsights();

    if (!insights.API_Requests) {
      insights.API_Requests = [];
    }

    insights.API_Requests.push({
      timestamp: new Date().toISOString(),
      log: message.trim(),
    });

    saveInsights(insights);

    console.log(`\n[API LOG] ${message.trim()}\n`);
  },
};

export const withMetrics = async (operationName, asyncFunction) => {
  const start = performance.now();

  try {
    return await asyncFunction();
  } finally {
    const end = performance.now();

    const insights = getInsights();

    if (!insights.Metrics) {
      insights.Metrics = [];
    }

    insights.Metrics.push({
      operationName,
      durationMs: Number((end - start).toFixed(2)),
      timestamp: new Date().toISOString(),
    });

    saveInsights(insights);
  }
};
