import { Router } from "express";
import {
  createUser,
  logInUser,
  readOneUser,
  verifyUser,
} from "../controller/userController";

const router: any = Router();

router.route("/create-user").post(createUser);
router.route("/login").post(logInUser);
router.route("/verifyUser/:userID").post(verifyUser);
router.route("/read-one/:userID").get(readOneUser);

export default router;
