import { Application, json, Request, Response } from "express";
import cors from "cors";
import user from "./routes/userRoute";
import post from "./routes/postRoute";

export const mainApp = (app: Application) => {
  app.use(json());
  app.use(
    cors({
      methods: ["GET", "POST", "DELETE", "PATCH"],
      origin: "*",
    })
  );
  app.get("/", (req: Request, res: Response) => {
    try {
      return res.status(200).json({
        message: "Success..",
      });
    } catch (error: any) {
      return res.status(500).json({
        message: " Internal server error",
      });
    }
  });
  app.use("/user", user);
  app.use("/post", post);
};
