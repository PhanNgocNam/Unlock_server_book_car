const express = require("express");
const {
  createNewCarController,
  getAllCarController,
  getCarsOfOneUserController,
  updateCarController,
  updateIsdeletedCarController,
  findCarByUserController,
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

router.get("/search", () => {});

router.put("/update", updateCarController);

router.put("/update-isdeletedcar", updateIsdeletedCarController);
router.get("/find-car", authenticateToken, findCarByUserController);
module.exports.carRoute = router;
