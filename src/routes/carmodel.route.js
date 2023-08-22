const express = require("express");
const { carModelController } = require("../controllers/car_model.controller");
const router = express.Router();

router.post("/createcarmodel", carModelController);

module.exports.carModelRoute = router;
