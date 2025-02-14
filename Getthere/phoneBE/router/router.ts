import { Router } from "express";
import {
  getAllUsers,
  getOneUser,
  LoginAccount,
  RegisterAccount,
} from "../controller/userController";

const router: any = Router();

router.route("/get-one-user/:userID").get(getOneUser);
router.route("/get-all-users").get(getAllUsers);

router.route("/create-user").post(RegisterAccount);
router.route("/login-user").post(LoginAccount);

export default router;
