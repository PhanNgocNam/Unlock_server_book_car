const express = require("express");
const {
  registerUserController,
  registerMutipleUserController,
} = require("../controllers/user.controller");
const router = express.Router();
const db = require("../models");

const { processUsersData } = require("../middlewares/processUsersData");

// router.post("/register-user", registerUserController);

router.post(
  "/register-mutiple-user",
  processUsersData,
  registerMutipleUserController
);

router.get("/get-one-user-by-uuid/:id", async (req, res) => {
  const { id } = req.params;
  const user = await db.user.findOne({
    where: { userUuid: id },
    include: ["cars"],
  });
  res.json(user);
});

router.post("/create-a-car", async (req, res) => {
  const {
    currentLocationInHCM,
    user_id,
    car_brand_id,
    car_model_id,
    car_seri_id,
    vehicle_type_id,
    car_license_id,
    car_id,
    regis_id,
  } = req.body;
  try {
    const car = await db.cars.create({
      currentLocationInHCM,
      user_id,
      car_brand_id,
      car_model_id,
      car_seri_id,
      vehicle_type_id,
      car_license_id,
    });

    const regis_method = await db.car_register_method.create({
      car_id,
      regis_id,
    });

    return res.json({ car, regis_method });
  } catch (err) {
    return res.json(err);
  }
});

router.get("/all", async (req, res) => {
  const cars = await db.cars.findAll({
    include: [
      "car_brand",
      "car_model",
      "vehicle_type",
      "license_plate_type",
      "vehicle_type",
      "car_seri",
      "user",
      "regis",
    ],
  });

  // db.cars.add;
  return res.json(cars);
});

module.exports.userRoute = router;
