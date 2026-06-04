import mongoose from "mongoose";

const testSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      enum: ["chapterWise", "pyq", "mockTest"],
      default: "chapterWise",
    },
    subjectId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Subject",
      required: true,
      index: true,
    },
    topics: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Topic",
      },
    ],
    subTopics: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "SubTopic",
      },
    ],
    questions: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Question",
      },
    ],
    status: {
      type: String,
      enum: ["draft", "live", "expired"],
      default: "draft",
    },
    difficulty: {
      type: String,
      enum: ["easy", "medium", "difficult"],
      required: true,
    },
    correctMarks: {
      type: Number,
      required: true,
      min: 1,
    },
    wrongMarks: {
      type: Number,
      required: true,
      max: 0,
    },
    unattemptMarks: {
      type: Number,
      required: true,
      max: 0,
    },
    totalTime: {
      type: Number,
      required: true,
      min: 0,
    },
    totalMarks: {
      type: Number,
      required: true,
      min: 0,
    },
    totalQuestions: {
      type: Number,
      required: true,
      min: 0,
      default: 0,
    },
    publishedAt: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

export const Test = mongoose.model("Test", testSchema);
