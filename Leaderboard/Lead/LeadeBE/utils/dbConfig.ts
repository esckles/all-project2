import { connect } from "mongoose";

const url: string = "mongodb://127.0.0.1:27017/practiceDB";

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
