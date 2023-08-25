const express = require("express");
const authRouter = express.Router();

const {
  authController,
  checkLoggedOut,
  registerUserController,
  getVerifyAccount,
} = require("../controllers/authController");
const { authValid } = require("../validation/authValidation");

authRouter.post("/login", authController);

//sendMail
// authRouter.get("/login-register", checkLoggedOut, getLoginRegister);
authRouter.get("/verify/:token", getVerifyAccount);
authRouter.post("/register", authValid.registerValid, registerUserController);

module.exports = authRouter;
