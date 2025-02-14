import { model, Schema } from "mongoose";
import { iUserData } from "../utils/interface";

const userModel = new Schema<iUserData>(
  {
    status: {
      type: String,
      default: "student",
    },
    presentClass: {
      type: String,
    },
    firstName: {
      type: String,
    },
    lastName: {
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
    phone: {
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

    stage3Score: {
      type: Number,
      default: 0,
    },

    stage4Score: {
      type: Number,
      default: 0,
    },

    stage1Result: {
      type: [],
    },

    stage2Result: {
      type: [],
    },

    stage3Result: {
      type: [],
    },

    stage4Result: {
      type: [],
    },
  },
  { timestamps: true }
);

export default model<iUserData>("users", userModel);
