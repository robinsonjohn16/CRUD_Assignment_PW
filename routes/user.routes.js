import app from "../app.js";
import express from "express";
import {
   loginController,
   registerController,
} from "../controller/user.controller.js";

import {
   verifyLoginDetails,
   verifyRegisterDetails,
} from "../middleware/user.middleware.js";

const userRouter = express.Router();
// userRouter.get("/index", index);
userRouter.route("/register").post(verifyRegisterDetails, registerController);
userRouter.route("/login").post(verifyLoginDetails, loginController);

export default userRouter;
