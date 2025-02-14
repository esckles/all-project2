import { connect } from "mongoose";
import env from "dotenv";
env.config();

// const url: string = "mongodb://127.0.0.1:27017/stemDB";

const url: string =
  "mongodb+srv://skillscapeofficier:skillscapeofficier@cluster0.0dubq.mongodb.net/nextGenDB?retryWrites=true&w=majority&appName=Cluster0";

export const dbConfig = async () => {
  await connect(url)
    .then(() => {
      console.clear();
      console.log("db Connected ❤️❤️🚀🚀🎮");
    })
    .catch((err: any) => {
      console.error(err);
    });
};
