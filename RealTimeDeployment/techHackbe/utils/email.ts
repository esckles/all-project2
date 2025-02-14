// import { google } from "googleapis";
// import ejs from "ejs";
// import path from "node:path";
// import env from "dotenv";
// import nodemailer from "nodemailer";
// import jwt from "jsonwebtoken";
// env.config();

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

import nodemailer from "nodemailer";
import { google } from "googleapis";
import env from "dotenv";
env.config();
import ejs from "ejs";
import path from "node:path";

const GOOGLE_ID = process.env.GOOGLE_ID;
const GOOGLE_SECRET = process.env.GOOGLE_SECRET;
const GOOGLE_URL = process.env.GOOGLE_URL as string;
const GOOGLE_TOKEN = process.env.GOOGLE_TOKEN as string;

const oAuth = new google.auth.OAuth2(GOOGLE_ID, GOOGLE_SECRET, GOOGLE_URL);
oAuth.setCredentials({ refresh_token: GOOGLE_TOKEN });

export const createAccountEmail = async (user: any) => {
  const accessToken: any = (await oAuth.getAccessToken()).token;
  const transporter = nodemailer.createTransport({
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

  const id = user?._id;
  const pathFile = path.join(__dirname, "../views/otp.ejs");
  // let verificationURL = `https://two-factor-authmije.web.app/auth/otp/${id}`;
  let verificationURL = `https://webtest-fe.web.app/auth/otp/${id}`;
  // let verificationURL = `http://localhost/api/create-user/otp/${id}`;
  const html = await ejs.renderFile(pathFile, {
    name: user?.email,
    url: verificationURL,
    otp: user?.otp,
    time: user?.otpExpiresAt,
  });

  const mailData = {
    to: user?.email,
    from: `${process.env.GOOGLE_MAIL}`,
    subject: "Account creation verification",
    text: "This is just a test message",
    html,
  };

  await transporter.sendMail(mailData).then(() => {
    console.log("mail sent");
  });
};
