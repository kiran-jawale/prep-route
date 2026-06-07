import mongoose from "mongoose";

const subjectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      index: true,
    },
  },
  {
    timestamps: true,
  }
);
subjectSchema.index(
  {
    name: 1,
  },
  {
    unique: true,
  }
);

const Subject = mongoose.model("Subject", subjectSchema);
export { Subject };
export default Subject;
