import env from "dotenv";
import cors from "cors";
import { google } from "googleapis";
import nodemailer from "nodemailer";

const GOOGLE_ID = process.env.GOOGLE_ID;
const GOOGLE_SECRET = process.env.GOOGLE_SECRET;
const GOOGLE_URL = process.env.GOOGLE_URL;
const GOOGLE_TOKEN = process.env.GOOGLE_TOKEN;

const oAuth = new google.auth.OAuth2(GOOGLE_ID, GOOGLE_SECRET, GOOGLE_URL);

oAuth.setCredentials({ refresh_token: GOOGLE_TOKEN });

const createaccountEmail = async (user: any) => {
  const accessToken: any = (await oAuth.getAccessToken()).token;
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: process.env.GOOGLE_MAIl as string,
      clientId: GOOGLE_ID,
      clientSecret: GOOGLE_SECRET,
      refreshToken: GOOGLE_TOKEN,
      accessToken,
    },
  });
};
