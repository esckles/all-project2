import { Application, Request, Response } from "express";
import env from "dotenv";
env.config();

export const mainApp = async (app: Application) => {
  try {
    app.use("/api");
    app.get("/", (req: Request, res: Response) => {
      try {
        res.status(200).json({ message: "Welcome to my API", data: 200 });
      } catch (error) {
        res.status(404).json({ message: "Error to my API", data: 404 });
      }
    });
  } catch (error) {
    return error;
  }
};
