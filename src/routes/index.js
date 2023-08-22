const express = require("express");
const rootRouter = express.Router();
const { testRouter } = require("./test.route");
const authRouter = require("./auth.route");
const { userRoute } = require("./user.route");

rootRouter.use("/test", testRouter);
rootRouter.use("/auth", authRouter);
rootRouter.use("/", userRoute);

module.exports = {
  rootRouter,
};
