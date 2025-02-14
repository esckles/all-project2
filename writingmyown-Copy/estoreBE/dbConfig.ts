import mongoose from "mongoose";
import env from "dotenv";
env.config();
// export const dbConfig = () => {
//   mongoose.connect(`${process.env.DB_URl!}`).then(() => {
//     console.log("Connected...");
//   });
// };

export const dbConfig = () => {
  mongoose.connect(`mongodb://127.0.0.1:27017/myLittleStoreDB`).then(() => {
    console.log("Connected...");
  });
};
