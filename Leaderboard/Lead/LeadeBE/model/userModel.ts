import { model, Schema } from "mongoose";
import { iUserData } from "../utils/interface";

const userModel = new Schema<iUserData>(
  {
    status: {
      type: String,
      default: "student",
    },
    name: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
    schoolName: {
      type: String,
    },
    phoneNumber: {
      type: String,
      default: "080",
    },
    avatar: {
      type: String,
    },

    stage1Score: {
      type: Number,
      default: 0,
    },

    stage2Score: {
      type: Number,
      default: 0,
    },

    stage1Result: {
      type: [],
    },

    stage2Result: {
      type: [],
    },
  },
  { timestamps: true }
);

export default model<iUserData>("users", userModel);
