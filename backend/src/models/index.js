import mongoose from "mongoose";
import config from "../constants/config.js";
import { syncTestStatuses } from "../services/helpers/testSync.service.js";

const connectDb = async () => {
  try {
    await mongoose.connect(config.MONGODB_URI);

    await syncTestStatuses();

    console.log("MongoDB Connected");
  } catch (error) {
    throw error;
  }
};

export default connectDb;