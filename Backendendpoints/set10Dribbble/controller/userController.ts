import { Request, Response } from "express";
import userModel from "../model/userModel";

export const getAllUser = async (req: Request, res: any) => {
  try {
    const users = await userModel.find();

    return res.status(200).json({
      message: "All users found",
      data: users,
      status: 200,
    });
  } catch (error: any) {
    return res.status(404).json({
      message: "Error gettting users",
      status: 404,
    });
  }
};

export const getAllUsers = async (req: Request, res: any): Promise<any> => {
  try {
    const users = await userModel.find();

    return res.status(200).json({
      message: "All users found",
      data: users,
      status: 200,
    });
  } catch (error: any) {
    return res.status(404).json({
      message: "Error gettting users",
      status: 404,
    });
  }
};

export const createUserAccount = async (
  req: Request,
  res: any
): Promise<any> => {
  try {
    const { name, email, password, avatar } = req.body;
    const users = await userModel.create({ name, email, password, avatar });

    return res.status(201).json({
      message: "user account created successfully",
      data: users,
      status: 201,
    });
  } catch (error: any) {
    return res.status(404).json({
      message: "Error creating user account",
      status: 404,
    });
  }
};

export const loginUserAccount = async (
  req: Request,
  res: any
): Promise<any> => {
  try {
    const { email, password } = req.body;
    const users = await userModel.findOne({ email });

    if (users) {
      if (password === users.password) {
        return res.status(201).json({
          message: "user login",
          data: users,
          status: 201,
        });
      } else {
        return res.status(404).json({
          message: "password is incorrect",
        });
      }
    } else {
      return res.status(404).json({
        message: "Email not found",
      });
    }
  } catch (error: any) {
    return res.status(404).json({
      message: "Error creating user account",
      status: 404,
    });
  }
};
