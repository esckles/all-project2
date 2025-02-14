import { Application, Request, Response } from "express";
import userRouter from "./router/userRouter";

export const mainApp = async (app: Application) => {
  app.use("/api", userRouter);
  try {
    app.get("/", (req: Request, res: Response): any => {
      try {
        return res.status(200).json({
          message: "Welcome to Two factor auth",
        });
      } catch (error) {
        return res.status(404).json({
          message: "Error",
        });
      }
    });
  } catch (error) {
    return error;
  }
};
