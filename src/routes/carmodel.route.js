const express = require("express");
const {
  createcarModelController,
  getAllcarModelController,
  getOneCarModelController,
} = require("../controllers/car_model.controller");
const router = express.Router();

router.post("/createcarmodel", createcarModelController);
router.get("/getcarmodel", getAllcarModelController);
router.get("/getonecarmodel", getOneCarModelController);
module.exports.carModelRoute = router;
