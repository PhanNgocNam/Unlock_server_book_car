const express = require("express");
const {
  carseriController,
  getAllcarSeriController,
  getOneCarSeriController,
  getAllCarSeriByRlyAndBrandController,
} = require("../controllers/car_seri.controller");
const router = express.Router();

router.post("/createcarseri", carseriController);
router.get("/getcarseri", getAllcarSeriController);
router.get("/getonecarseri", getOneCarSeriController);
router.get(
  "/get-car-seri-by-rly-id-and-brand-id",
  getAllCarSeriByRlyAndBrandController
);
module.exports.carSeriRoute = router;
