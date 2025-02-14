import { Router } from "express";
import {
  ReadAllUser,
  ReadOneUser,
  signIn,
  signUp,
} from "../controller/userController";

const router: any = Router();

router.route("/signUp-user").post(signUp);
router.route("/signIn-user").post(signIn);
router.route("/ReadOne/:userID").get(ReadOneUser);
router.route("/ReadOne").get(ReadAllUser);

export default router;
