import { Application, Request, Response } from "express";
import User from "./router/UserAuthRouter";

export const mainApp = (app: Application) => {
  try {
    app.use("/api", User);
    app.get("/", (req: Request, res: Response) => {
      try {
        res.status(200).json({ message: "Welcome to Auth API", status: 200 });
      } catch (error) {
        res.status(404).json({ message: "Error to Auth API", status: 404 });
      }
    });
  } catch (error) {
    return error;
  }
};
