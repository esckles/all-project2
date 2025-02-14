"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.readAllUsers = exports.readOneUser = exports.verifyUser = exports.logInUser = exports.createUser = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const crypto_1 = __importDefault(require("crypto"));
const userModel_1 = __importDefault(require("../model/userModel"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
const email_1 = require("../utils/email");
const otp_1 = require("../utils/otp");
dotenv_1.default.config();
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, password } = req.body;
        const { otp, expiresIn } = (0, otp_1.generateOtp)();
        const salt = yield bcrypt_1.default.genSalt(9);
        const hashed = yield bcrypt_1.default.hash(password, salt);
        const token = crypto_1.default.randomBytes(3).toString("hex");
        const user = yield userModel_1.default.create({
            name,
            email,
            password: hashed,
            verifiedToken: token,
            otp: otp,
            otpExpiresAt: expiresIn,
        });
        (0, email_1.createAccountEmail)(user);
        return res.status(201).json({
            message: "User created successfully",
            status: 201,
            data: user,
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "Error creating user",
            status: 404,
        });
    }
});
exports.createUser = createUser;
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
const logInUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const user = yield userModel_1.default.findOne({ email });
        if (user) {
            const passwordCheck = yield bcrypt_1.default.compare(password, user.password);
            if (passwordCheck) {
                if ((user === null || user === void 0 ? void 0 : user.isVerified) && (user === null || user === void 0 ? void 0 : user.verifiedToken) === "") {
                    const token = jsonwebtoken_1.default.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES });
                    return res.status(201).json({
                        message: "Login Successfully",
                        data: token,
                        status: 201,
                    });
                }
                else {
                    return res.status(404).json({
                        message: "Your account hasn't been verified",
                        status: 404,
                    });
                }
            }
            else {
                return res.status(404).json({
                    message: "Incorrect password",
                    status: 404,
                });
            }
        }
        else {
            return res.status(404).json({
                message: "Incorrect email",
                status: 404,
            });
        }
    }
    catch (error) {
        return res.status(404).json({ error: error });
    }
});
exports.logInUser = logInUser;
const verifyUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userID } = req.params;
        const { otp } = req.body;
        const user = yield userModel_1.default.findById(userID);
        if (user) {
            if (user.otp === otp) {
                const otpExpiresAt = new Date(user.otpExpiresAt);
                const currentDate = new Date();
                if (currentDate > otpExpiresAt) {
                    return res.status(404).json({ message: "OTP expired" });
                }
                else {
                    const updatedUser = yield userModel_1.default.findByIdAndUpdate(userID, {
                        verifiedToken: "",
                        isVerified: true,
                        otp: "",
                        otpExpiresAt: "",
                    }, { new: true });
                    return res.status(201).json({
                        message: "User account verified successfully",
                        data: updatedUser,
                        status: 201,
                    });
                }
            }
            else {
                return res.status(400).json({ message: "Invalid OTP" });
            }
        }
        else {
            return res.status(404).json({
                message: "Email not found",
                status: 404,
            });
        }
    }
    catch (error) {
        return res.status(404).json({
            message: "Error verifying user",
            status: 404,
        });
    }
});
exports.verifyUser = verifyUser;
const readOneUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userID } = req.params;
        const user = yield userModel_1.default.findById(userID);
        return res.status(201).json({
            message: "user read successfully",
            status: 201,
            data: user,
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "Error reading user",
            status: 404,
        });
    }
});
exports.readOneUser = readOneUser;
const readAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield userModel_1.default.find();
        return res.status(200).json({
            message: "Users read successfully",
            status: 200,
            data: user,
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "Error reading all users",
            status: 404,
        });
    }
});
exports.readAllUsers = readAllUsers;
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
