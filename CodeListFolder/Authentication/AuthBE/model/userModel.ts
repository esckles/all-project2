import { Document, model, Schema } from "mongoose";

interface iUser {
  userName: string;
  email: string;
  password: string;
  isVerifiedToken: string;
  isVerified: boolean;
}

interface iUserData extends iUser, Document {}

const userModel = new Schema<iUserData>(
  {
    userName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default model<iUserData>("users", userModel);
