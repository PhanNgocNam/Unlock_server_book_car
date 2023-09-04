const express = require("express");
const {
  createNewCarController,
  getAllCarController,
  getCarsOfOneUserController,
  updateCarController,
  updateIsdeletedCarController,
  findCarByUserController,
  uploadCarImageController,
} = require("../controllers/cars.controller");
const { authenticateToken } = require("../middlewares/authenticateToken");
const { upload } = require("../utils/multer");
const router = express.Router();

router.post("/create-a-car", createNewCarController);

router.get(
  "/get-cars-of-one-user",
  authenticateToken,
  getCarsOfOneUserController
);

router.post("/create-a-car", createNewCarController);

router.post(
  "/upload-car-image",
  upload.single("file"),
  uploadCarImageController
);

router.get("/all", getAllCarController);

router.put("/update", updateCarController);

router.put("/update-isdeletedcar", updateIsdeletedCarController);

router.get("/find-car", authenticateToken, findCarByUserController);

module.exports.carRoute = router;
