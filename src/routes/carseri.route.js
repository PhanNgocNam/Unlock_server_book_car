const express = require("express");
const { carseriController } = require("../controllers/car_seri.controller");
const router = express.Router();

router.post("/createcarseri", carseriController);

module.exports.carSeriRoute = router;
