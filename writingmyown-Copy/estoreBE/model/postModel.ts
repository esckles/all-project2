import { Document, model, Schema, Types } from "mongoose";
import { iPost } from "../interface";

interface iPostData extends iPost, Document {}

const postModel = new Schema<iPostData>(
  {
    title: { type: String, required: true },
    userId: { type: Types.ObjectId, ref: "users" },
    image: { type: String, required: true },
    imageId: { type: String, required: true },
  },
  { timestamps: true }
);

export default model<iPostData>("posts", postModel);
