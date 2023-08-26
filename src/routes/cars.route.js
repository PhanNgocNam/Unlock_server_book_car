const express = require("express");
const {
  createNewCarController,
  getCarsOfOneUserController,
} = require("../controllers/cars.controller");
const { authenticateToken } = require("../middlewares/authenticateToken");
const router = express.Router();

router.post("/create-a-car", createNewCarController);
router.get(
  "/get-cars-of-one-user",
  authenticateToken,
  getCarsOfOneUserController
);

module.exports.carRoute = router;
