import express, { Application, Request, Response } from "express";
import cors from "cors";

import slider from "./router/sliderRouter";
import user from "./router/userRouter";
import { dbConfig } from "./utils/dbConfig";

const app: Application = express();
const PORT: number = 8899;

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PATCH", "DELETE"],
  })
);

app.use(express.json());

app.use("/api", user);
app.use("/api", slider);

app.get("/", (req: Request, res: Response) => {
  try {
    res.status(200).json({
      message: "Hello from Dribble API!",
    });
  } catch (error) {
    res.status(500).json({ message: "Error" });
  }
});

app.listen(PORT, () => {
  dbConfig();
});
