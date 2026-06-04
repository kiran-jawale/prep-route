import mongoose from "mongoose";

const subTopicSchema = new mongoose.Schema(
  {
    topicId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Topic",
      required: true,
      index: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
      index : true,
    },
  },
  {
    timestamps: true,
  }
);

subTopicSchema.index(
  {
    topicId: 1,
    name: 1,
  },
  {
    unique: true,
  }
);

export const SubTopic = mongoose.model("SubTopic", subTopicSchema);
