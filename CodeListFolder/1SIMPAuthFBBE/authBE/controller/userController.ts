import { Request, Response } from "express";
import bcrypt from "bcrypt";
import userModel from "../model/userModel";

export const signUp = async (req: Request, res: Response) => {
  try {
    const { userName, email, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);
    const user = await userModel.create({
      userName,
      email,
      password: hashed,
    });
    return res.status(201).json({
      message: "User Account Created Successfully",
      data: user,
      status: 201,
    });
  } catch (error) {
    return res
      .status(404)
      .json({ message: "Error Creating User Account", status: 404 });
  }
};

export const signIn = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (user) {
      const decrypted = await bcrypt.compare(password, user.password);
      if (decrypted) {
      } else {
        return res
          .status(404)
          .json({ message: "Incorrect Password", status: 404 });
      }
    } else {
      return res.status(404).json({ message: "Incorrect Email", status: 404 });
    }
    return res
      .status(201)
      .json({ message: "Account SignIn Successfully ", status: 201 });
  } catch (error) {
    return res.status(404).json({ message: "Error signin", status: 404 });
  }
};

export const ReadOneUser = async (req: Request, res: Response) => {
  try {
    const { userID } = req.params;
    const user = await userModel.findById(userID);
    return res
      .status(200)
      .json({ message: "One User Read", data: user, status: 200 });
  } catch (error) {
    return res
      .status(404)
      .json({ message: "Error Read One User", status: 404 });
  }
};
export const ReadAllUser = async (req: Request, res: Response) => {
  try {
    const user = await userModel.find();
    return res
      .status(200)
      .json({ message: "ALL User Read", data: user, status: 200 });
  } catch (error) {
    return res
      .status(404)
      .json({ message: "Error Read ALL User", status: 404 });
  }
};
