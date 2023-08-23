const express = require("express");
const {
  createcarModelController,
  getAllcarModelController,
} = require("../controllers/car_model.controller");
const router = express.Router();

router.post("/createcarmodel", createcarModelController);
router.get("/getcarmodel", getAllcarModelController);
module.exports.carModelRoute = router;
