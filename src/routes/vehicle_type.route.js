const express = require("express");
const {
  vehicleTypeController,
  getAllvehicleTypeController,
} = require("../controllers/vehicle_type.controller");
const router = express.Router();

router.post("/createvehicleType", vehicleTypeController);
router.get("/getvehicletype", getAllvehicleTypeController);
module.exports.vehicleTypeRoute = router;
