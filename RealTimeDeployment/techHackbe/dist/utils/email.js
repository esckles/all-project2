"use strict";
// import { google } from "googleapis";
// import ejs from "ejs";
// import path from "node:path";
// import env from "dotenv";
// import nodemailer from "nodemailer";
// import jwt from "jsonwebtoken";
// env.config();
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
exports.createAccountEmail = void 0;
// const GOOGLE_ID = process.env.GOOGLE_ID;
// const GOOGLE_SECRET = process.env.GOOGLE_SECRET;
// const GOOGLE_TOKEN = process.env.GOOGLE_TOKEN;
// const GOOGLE_URL = process.env.GOOGLE_URL;
// const oAuth = new google.auth.OAuth2(GOOGLE_ID, GOOGLE_URL, GOOGLE_SECRET);
// oAuth.setCredentials({ refresh_token: GOOGLE_TOKEN });
// export const createAccountEmail = async (user: any) => {
//   const accessToken: any = (await oAuth.getAccessToken()).token;
//   const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       type: "OAuth2",
//       user: process.env.GOOGLE_MAIL,
//       clientId: GOOGLE_ID,
//       clientSecret: GOOGLE_SECRET,
//       refreshToken: GOOGLE_TOKEN,
//       accessToken: accessToken,
//     },
//   });
//   const token = jwt.sign({ id: user?._id }, process.env.JWT_SECRET as string, {
//     expiresIn: process.env.JWT_EXPIRES,
//   });
//   const URL_value = `http://localhost:10000/login/${token}`;
//   let pathFile = path.join(__dirname, "../views/createAccount.ejs");
//   const html = await ejs.renderFile(pathFile, {
//     name: user?.name,
//     url: URL_value,
//   });
//   console.log("send t");
//   const mailer = {
//     to: user?.email,
//     from: `Account Creation <${process.env.GOOGLE_MAIL}>`,
//     subject: "Account Verification",
//     html,
//   };
//   transporter.sendMail(mailer).then(() => {
//     console.log("send");
//   });
// };
const nodemailer_1 = __importDefault(require("nodemailer"));
const googleapis_1 = require("googleapis");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const ejs_1 = __importDefault(require("ejs"));
const node_path_1 = __importDefault(require("node:path"));
const GOOGLE_ID = process.env.GOOGLE_ID;
const GOOGLE_SECRET = process.env.GOOGLE_SECRET;
const GOOGLE_URL = process.env.GOOGLE_URL;
const GOOGLE_TOKEN = process.env.GOOGLE_TOKEN;
const oAuth = new googleapis_1.google.auth.OAuth2(GOOGLE_ID, GOOGLE_SECRET, GOOGLE_URL);
oAuth.setCredentials({ refresh_token: GOOGLE_TOKEN });
const createAccountEmail = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const accessToken = (yield oAuth.getAccessToken()).token;
    const transporter = nodemailer_1.default.createTransport({
        service: "gmail",
        auth: {
            type: "OAuth2",
            user: process.env.GOOGLE_MAIL,
            clientId: GOOGLE_ID,
            clientSecret: GOOGLE_SECRET,
            refreshToken: GOOGLE_TOKEN,
            accessToken: accessToken,
        },
    });
    const id = user === null || user === void 0 ? void 0 : user._id;
    const pathFile = node_path_1.default.join(__dirname, "../views/otp.ejs");
    // let verificationURL = `https://two-factor-authmije.web.app/auth/otp/${id}`;
    let verificationURL = `https://webtest-fe.web.app/auth/otp/${id}`;
    // let verificationURL = `http://localhost/api/create-user/otp/${id}`;
    const html = yield ejs_1.default.renderFile(pathFile, {
        name: user === null || user === void 0 ? void 0 : user.email,
        url: verificationURL,
        otp: user === null || user === void 0 ? void 0 : user.otp,
        time: user === null || user === void 0 ? void 0 : user.otpExpiresAt,
    });
    const mailData = {
        to: user === null || user === void 0 ? void 0 : user.email,
        from: `${process.env.GOOGLE_MAIL}`,
        subject: "Account creation verification",
        text: "This is just a test message",
        html,
    };
    yield transporter.sendMail(mailData).then(() => {
        console.log("mail sent");
    });
});
exports.createAccountEmail = createAccountEmail;
