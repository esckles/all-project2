import express, { Application } from "express";
import { mainApp } from "./mainApp";
import { dbConfig } from "./dbConfig";

const port: number = 2345;

const app = express();

mainApp(app);
const server = app.listen(port, () => {
  dbConfig();
});

process.on("uncaughtException", (error: any) => {
  console.log(error);
  server.close(() => {
    process.exit(1);
  });
});
process.on("unhandledRejection", (reason: any) => {
  console.log(reason);
  server.close(() => {
    process.exit(1);
  });
});
