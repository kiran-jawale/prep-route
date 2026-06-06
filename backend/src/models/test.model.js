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
    publishMode: {
      type: String,
      enum: ["immediate", "scheduled"],
      default: "immediate",
    },
    scheduledAt: {
      type: Date,
      default: null,
    },
    publishedAt: {
      type: Date,
      default: null,
    },
    availableUntil: {
      type: Date,
      default: null,
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
      default: 0,
    },
    totalMarks: {
      type: Number,
      required: true,
      min: 0,
      default: 0,
    },
    totalQuestions: {
      type: Number,
      required: true,
      min: 0,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Test = mongoose.model("Test", testSchema);
export default Test
export {Test}