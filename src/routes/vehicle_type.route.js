const express = require("express");
const {
  vehicleTypeController,
  getAllvehicleTypeController,
  getOneVehicleTypeController,
} = require("../controllers/vehicle_type.controller");
const router = express.Router();

router.post("/createvehicleType", vehicleTypeController);
router.get("/getvehicletype", getAllvehicleTypeController);
router.get("/getonevehicletype", getOneVehicleTypeController);
module.exports.vehicleTypeRoute = router;
