import { Test } from "../../models/test.model.js";

export const syncTestStatuses = async () => {
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
};
