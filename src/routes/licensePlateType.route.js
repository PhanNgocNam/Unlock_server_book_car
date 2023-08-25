const express = require("express");
const {
  licensePlateTypeController,
  getAlllicensePlateTypeController,
  getOnelicenseplatetypeController,
} = require("../controllers/license_plate_type.controller");
const router = express.Router();

router.post("/createlicensePlateType", licensePlateTypeController);
router.get("/getlicensePlateType", getAlllicensePlateTypeController);
router.get("/getonelicenseplatetype", getOnelicenseplatetypeController);
module.exports.licensePlateTypeRoute = router;
