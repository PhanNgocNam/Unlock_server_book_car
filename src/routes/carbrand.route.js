const express = require("express");
const {
  carBrandController,
  getAllcarBrandController,
} = require("../controllers/car_brand.controller");
const router = express.Router();

router.post("/createcarbrand", carBrandController);
router.get("/getcarbrand", getAllcarBrandController);
module.exports.carBrandRoute = router;
