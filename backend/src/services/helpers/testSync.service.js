import CONFIG from "../../constants/config.js";
import { Test } from "../../models/test.model.js";
import {withMetrics} from '../../utils/metricsLogger.js'

export const syncTestStatuses = async () => {
  return await withMetrics("SYNC_TEST_STATUSES", async () => {
    const now = new Date();

    await Test.updateMany(
      {
        status: "draft",
        publishMode: "scheduled",
        scheduledAt: {
          $lte: now,
        },
      },
      {
        $set: {
          status: "live",
          publishedAt: now,
        },
      }
    );

    await Test.updateMany(
      {
        status: "live",
        availableUntil: {
          $ne: null,
          $lte: now,
        },
      },
      {
        $set: {
          status: "expired",
        },
      }
    );
  }, CONFIG.NODE_ENV !== "development"); //no logs on dev, due to nodemon restarts
};
