import express, { Application } from "express";
import cors from "cors";
import { dbConfig } from "./utils/dbConfig";
import { mainApp } from "./mainApp";

const port: number = 2323;

const app: Application = express();

app.use(express.json());
app.use(cors());
mainApp(app);
app.listen(port, () => {
  dbConfig();
});
