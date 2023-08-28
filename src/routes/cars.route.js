const express = require("express");
const {
  createNewCarController,
  getAllCarController,
  getCarsOfOneUserController,
  updateCarController,
} = require("../controllers/cars.controller");
const { authenticateToken } = require("../middlewares/authenticateToken");
const router = express.Router();

router.post("/create-a-car", createNewCarController);

router.get(
  "/get-cars-of-one-user",
  authenticateToken,
  getCarsOfOneUserController
);

router.post("/create-a-car", createNewCarController);

router.get("/all", getAllCarController);
router.put("/update", updateCarController);
module.exports.carRoute = router;
