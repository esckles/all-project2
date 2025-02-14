import { Document, model, Schema } from "mongoose";

interface iUser {
  name: string;
  email: string;
  password: string;
  verifiedToken: string;
  avatar: string;
  avatarID: string;
  isVerified: boolean;
  otp: string;
  otpExpiresAt: string;
}

interface iUserData extends iUser, Document {}

const userModel = new Schema<iUserData>(
  {
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
    verifiedToken: {
      type: String,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    avatar: {
      type: String,
    },
    avatarID: {
      type: String,
    },
    otp: {
      type: String,
    },
    otpExpiresAt: {
      type: String,
    },
  },
  { timestamps: true }
);

export default model<iUserData>("user", userModel);
