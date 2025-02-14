import { model, Schema } from "mongoose";

interface iUser {
  name: string;
  email: string;
  password: string;
}

interface iUserData extends iUser, Document {}

const userModel = new Schema<iUserData>({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
});

export default model<iUserData>("user", userModel);
