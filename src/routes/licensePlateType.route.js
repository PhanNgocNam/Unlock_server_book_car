const express = require("express");
const {
  licensePlateTypeController,
} = require("../controllers/license_plate_type.controller");
const router = express.Router();

router.post("/createlicensePlateType", licensePlateTypeController);

module.exports.licensePlateTypeRoute = router;
