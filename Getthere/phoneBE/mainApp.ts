import { Application, Request, Response } from "express";
import path from "./router/router";

export const mainApp = async (app: Application) => {
  try {
    app.use("/api", path);
    app.get("/", (req: Request, res: Response) => {
      res.status(200).json({
        message: "Welcome to sammies API",
        status: 200,
      });
    });
  } catch (error) {
    return error;
  }
};
