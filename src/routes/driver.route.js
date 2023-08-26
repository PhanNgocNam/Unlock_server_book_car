const express = require("express");
const {
  createdriverController,
  getAllDriverController,
  getOneDriverController,
} = require("../controllers/driver.controller");
const router = express.Router();

router.post("/createdriver", createdriverController);
router.get("/getdriver", getAllDriverController);
router.get("/getonedriver", getOneDriverController);
module.exports.driverRoute = router;
