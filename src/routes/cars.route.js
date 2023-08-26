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


  getAllCarController,
} = require("../controllers/cars.controller");
const router = express.Router();

router.post("/create-a-car", createNewCarController);
router.get("/all", getAllCarController);

module.exports.carRoute = router;
