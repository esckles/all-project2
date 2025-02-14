import { Request, Response } from "express";
import bcrypt from "bcrypt";
import crypto from "crypto";
import userModel from "../model/userModel";
import jwt from "jsonwebtoken";
import env from "dotenv";
import { createAccountEmail } from "../utils/email";
import { generateOtp } from "../utils/otp";

env.config();

export const createUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { name, email, password } = req.body;
    const { otp, expiresIn } = generateOtp();

    const salt = await bcrypt.genSalt(9);
    const hashed = await bcrypt.hash(password, salt);
    const token = crypto.randomBytes(3).toString("hex");

    const user = await userModel.create({
      name,
      email,
      password: hashed,
      verifiedToken: token,
      otp: otp,
      otpExpiresAt: expiresIn,
    });

    createAccountEmail(user);

    return res.status(201).json({
      message: "User created successfully",
      status: 201,
      data: user,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Error creating user",
      status: 404,
    });
  }
};

// export const loginUser = async (
//   req: Request,
//   res: Response
// ): Promise<Response> => {
//   try {
//     const { email, password } = req.body;

//     const user = await userModel.findOne({ email });
//     if (user) {
//       const check = await bcrypt.compare(password, user?.password);
//       if (check) {
//         if (user?.isVerified && user?.verifiedToken === "") {
//           const token: any = jwt.sign(
//             { id: user?._id },
//             process.env.JWT_SECRET as string,
//             {
//               expiresIn: process.env.JWT_EXPIRES,
//             }
//           );
//           return res.status(200).json({
//             message: "Login successfull",
//             status: 200,
//             data: token,
//           });
//         } else {
//           return res.status(404).json({
//             message: "Couldnt verify account ",
//             status: 404,
//           });
//         }
//       } else {
//         return res.status(404).json({
//           message: "Error with password",
//           status: 404,
//         });
//       }
//     } else {
//       return res.status(404).json({
//         message: "Error with email",
//         status: 404,
//       });
//     }
//   } catch (error) {
//     return res.status(404).json({
//       message: "Error logging in user",
//       status: 404,
//     });
//   }
// };

export const logInUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });

    if (user) {
      const passwordCheck = await bcrypt.compare(password, user.password);

      if (passwordCheck) {
        if (user?.isVerified && user?.verifiedToken === "") {
          const token: any = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET as string,
            { expiresIn: process.env.JWT_EXPIRES }
          );

          return res.status(201).json({
            message: "Login Successfully",
            data: token,
            status: 201,
          });
        } else {
          return res.status(404).json({
            message: "Your account hasn't been verified",
            status: 404,
          });
        }
      } else {
        return res.status(404).json({
          message: "Incorrect password",
          status: 404,
        });
      }
    } else {
      return res.status(404).json({
        message: "Incorrect email",
        status: 404,
      });
    }
  } catch (error) {
    return res.status(404).json({ error: error });
  }
};
export const verifyUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { userID } = req.params;
    const { otp } = req.body;
    const user = await userModel.findById(userID);
    if (user) {
      if (user.otp === otp) {
        const otpExpiresAt = new Date(user.otpExpiresAt);
        const currentDate = new Date();

        if (currentDate > otpExpiresAt) {
          return res.status(404).json({ message: "OTP expired" });
        } else {
          const updatedUser = await userModel.findByIdAndUpdate(
            userID,
            {
              verifiedToken: "",
              isVerified: true,
              otp: "",
              otpExpiresAt: "",
            },
            { new: true }
          );

          return res.status(201).json({
            message: "User account verified successfully",
            data: updatedUser,
            status: 201,
          });
        }
      } else {
        return res.status(400).json({ message: "Invalid OTP" });
      }
    } else {
      return res.status(404).json({
        message: "Email not found",
        status: 404,
      });
    }
  } catch (error) {
    return res.status(404).json({
      message: "Error verifying user",
      status: 404,
    });
  }
};

export const readOneUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { userID } = req.params;

    const user = await userModel.findById(userID);

    return res.status(201).json({
      message: "user read successfully",
      status: 201,
      data: user,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Error reading user",
      status: 404,
    });
  }
};

export const readAllUsers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const user = await userModel.find();

    return res.status(200).json({
      message: "Users read successfully",
      status: 200,
      data: user,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Error reading all users",
      status: 404,
    });
  }
};

// export const verifyOtp = async (
//   req: Request,
//   res: Response
// ): Promise<Response> => {
//   try {
//     const { userID } = req.params;
//     const { otp } = req.body;

//     const user = await userModel.findById(userID);
//     if (user) {
//       if (user?.otp === otp) {
//         return res.status(200).json({
//           message: "Verification successfull",
//           status: 200,
//         });
//       } else {
//         return res.status(404).json({
//           message: "Otp mismatch",
//           status: 404,
//         });
//       }
//     } else {
//       return res.status(404).json({
//         message: "User not found",
//         status: 404,
//       });
//     }
//   } catch (error) {
//     return res.status(404).json({
//       message: "Error verifying otp",
//       status: 404,
//     });
//   }
// };
