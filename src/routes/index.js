const express = require("express");
const rootRouter = express.Router();
const { testRouter } = require("./test.route");
const authRouter = require("./auth.route");
const { userRoute } = require("./user.route");
const { carBrandRoute } = require("./carbrand.route");
const { carModelRoute } = require("./carmodel.route");
const { carSeriRoute } = require("./carseri.route");
const { licensePlateTypeRoute } = require("./licensePlateType.route");
const { vehicleTypeRoute } = require("./vehicle_type.route");
const { regiterMethodRoute } = require("./registration_method.route");
rootRouter.use("/test", testRouter);
rootRouter.use("/carbrand", carBrandRoute);
rootRouter.use("/carseri", carSeriRoute);
rootRouter.use("/licensePlateType", licensePlateTypeRoute);
rootRouter.use("/carmodel", carModelRoute);
rootRouter.use("/vehicletype", vehicleTypeRoute);
rootRouter.use("/regiterMethods", regiterMethodRoute);
rootRouter.use("/auth", authRouter);
rootRouter.use("/", userRoute);

module.exports = {
  rootRouter,
};
