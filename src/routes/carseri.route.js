const express = require("express");
const {
  carseriController,
  getAllcarSeriController,
} = require("../controllers/car_seri.controller");
const router = express.Router();

router.post("/createcarseri", carseriController);
router.get("/getcarseri", getAllcarSeriController);
module.exports.carSeriRoute = router;
