import mongoose, { Document, Schema, Types, model } from "mongoose";
import { iUser } from "../interface";

interface iUserData extends iUser, Document {}

const userModel = new Schema<iUserData>(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    emailAddress: { type: String, required: true, unique: true },
    posts: [
      {
        type: Types.ObjectId,
        ref: "posts",
      },
    ],
  },
  { timestamps: true }
);

export default model<iUserData>("users", userModel);
