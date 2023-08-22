const express = require("express");
const {
  vehicleTypeController,
} = require("../controllers/vehicle_type.controller");
const router = express.Router();

router.post("/createvehicleType", vehicleTypeController);

module.exports.vehicleTypeRoute = router;
