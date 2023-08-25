const express = require("express");
const {
  carBrandController,
  getAllcarBrandController,
  getOneCarBrandController,
} = require("../controllers/car_brand.controller");
const router = express.Router();

router.post("/createcarbrand", carBrandController);
router.get("/getcarbrand", getAllcarBrandController);
router.get("/getonecarbrand", getOneCarBrandController);
module.exports.carBrandRoute = router;
