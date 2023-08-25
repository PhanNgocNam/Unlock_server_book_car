const express = require("express");
const {
  createNewCarController,
  getAllCarController,
} = require("../controllers/cars.controller");
const router = express.Router();

router.post("/create-a-car", createNewCarController);
router.get("/all", getAllCarController);
module.exports.carRoute = router;
