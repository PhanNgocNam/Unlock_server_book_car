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
/**
 * @swagger
 * tags:
 *   name: auth
 *   description: Auth management
 */

/**
 * @swagger
 * /:
 *   get:
 *     summary: get a  verify account
 *     tags: [Auth]
 *     responses:
 *       200:
 *         description: Successful response
 */
authRouter.get("/verify/:token", getVerifyAccount);
/**
 * @swagger
 * tags:
 *   name: auth
 *   description: Auth management
 */

/**
 * @swagger
 * /:
 *   post:
 *     summary: post a  register account
 *     tags: [Auth]
 *     responses:
 *       200:
 *         description: Successful response
 */
authRouter.post("/register", authValid.registerValid, registerUserController);

module.exports = authRouter;
