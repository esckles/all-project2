import { Document } from "mongoose";

interface iUser {
  status: string;
  name: string;
  email: string;
  password: string;
  schoolName: string;
  phoneNumber: string;
  avatar: string;

  stage1Result: Array<{}>;
  stage2Result: Array<{}>;
  stage1Score: number;
  stage2Score: number;
}

export interface iUserData extends iUser, Document {}
