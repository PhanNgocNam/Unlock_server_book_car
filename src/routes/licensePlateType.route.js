const express = require("express");
const {
  licensePlateTypeController,
  getAlllicensePlateTypeController,
} = require("../controllers/license_plate_type.controller");
const router = express.Router();

router.post("/createlicensePlateType", licensePlateTypeController);
router.get("/getlicensePlateType", getAlllicensePlateTypeController);
module.exports.licensePlateTypeRoute = router;
