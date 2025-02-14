import { Router } from "express";
import {
  createAccount,
  loginAccount,
  readSingleAccount,
  stage1Score,
  stage2Score,
  stage3Score,
  stage4Score,
  userAccount,
} from "../controller/userController";
import multer from "multer";
const router: Router = Router();
import { fileUpload } from "../utils/multer";
const upload = multer().single("avatar");

router.route("/register").post(fileUpload, createAccount);
router.route("/login").post(loginAccount);
router.route("/stage-one/:userID").patch(stage1Score);
router.route("/stage-2/:userID").patch(stage2Score);
router.route("/stage-3/:userID").patch(stage3Score);
router.route("/stage-4/:userID").patch(stage4Score);
router.route("/user/:userID").get(readSingleAccount);
router.route("/users/").get(userAccount);
export default router;
