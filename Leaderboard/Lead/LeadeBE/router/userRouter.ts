import { Router } from "express";
import {
  createAccount,
  loginAccount,
  readSingleAccount,
  stage1Score,
  userAccount,
} from "../controller/userController";

const router: Router = Router();

router.route("/register").post(createAccount);
router.route("/login").post(loginAccount);
router.route("/stage-one/:userID").patch(stage1Score);
router.route("/user/:userID").get(readSingleAccount);
router.route("/users/").get(userAccount);
export default router;
