const express = require("express");
const {
  carseriController,
  getAllcarSeriController,
  getOneCarSeriController,
} = require("../controllers/car_seri.controller");
const router = express.Router();

router.post("/createcarseri", carseriController);
router.get("/getcarseri", getAllcarSeriController);
router.get("/getonecarseri", getOneCarSeriController);
module.exports.carSeriRoute = router;
