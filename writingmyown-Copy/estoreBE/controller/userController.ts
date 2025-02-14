import { Request, Response } from "express";
import userModel from "../model/userModel";

export const createAccount = async (req: Request, res: Response) => {
  try {
    const { emailAddress, firstName, lastName } = req.body;
    const users = await userModel.create({ emailAddress, firstName, lastName });

    return res.status(201).json({
      message: "Account created successfully",
      data: users,
    });
  } catch (error: any) {
    return res.status(500).json({
      message: "Internal server error",
      data: error,
    });
  }
};
