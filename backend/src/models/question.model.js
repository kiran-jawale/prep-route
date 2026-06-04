import mongoose from "mongoose";

const questionSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      enum: ["mcq"],
      default: "mcq",
    },
    testId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Test",
      required: true,
      index: true,
    },
    subjectId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Subject",
      required: true,
    },

    topicId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Topic",
      required: true,
    },

    subTopicId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SubTopic",
      required: true,
    },
    question: {
      type: String,
      required: true,
      trim: true,
    },
    option1: {
      type: String,
      required: true,
      trim: true,
    },
    option2: {
      type: String,
      required: true,
      trim: true,
    },
    option3: {
      type: String,
      required: true,
      trim: true,
    },
    option4: {
      type: String,
      required: true,
      trim: true,
    },
    correctOption: {
      type: String,
      required: true,
      enum: ["option1", "option2", "option3", "option4"],
    },
    explanation: {
      type: String,
      default: "",
    },
    difficulty: {
      type: String,
      enum: ["easy", "medium", "difficult"],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Question = mongoose.model("Question", questionSchema);
