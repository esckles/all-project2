import path from "node:path";
import fs from "node:fs";

export const generateOtp = (): { otp: string; expiresIn: string } => {
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  const expiresDate = new Date(Date.now() + 10 * 60 * 1000);
  const expiresIn = `${expiresDate.getHours()}:${expiresDate.getMinutes()}:${expiresDate.getSeconds()}`;

  return { otp, expiresIn };
};
