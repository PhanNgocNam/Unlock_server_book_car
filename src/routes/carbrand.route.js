const express = require("express");
const { carBrandController } = require("../controllers/car_brand.controller");
const router = express.Router();

router.post("/createcarbrand", carBrandController);

module.exports.carBrandRoute = router;
