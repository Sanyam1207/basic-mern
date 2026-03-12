import mongoose from "mongoose";

const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/learnign";

export const connectDb = async () => {
  try {
    if (mongoose.connections[0].readyState) {
      return;
    } else {
      mongoose.connect(MONGODB_URI);
      console.log("connected");
    }
  } catch (error) {
    console.log("Error connecting to database !!!");
  }
};
