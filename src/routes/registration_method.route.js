const express = require("express");
const {
  RegistrationmethodsController,
  getAllvehicleTypeController,
} = require("../controllers/registration_methods.controller");
const router = express.Router();

router.post("/createRegiterMethod", RegistrationmethodsController);
// router.get("/getvehicletype", getAllvehicleTypeController);
module.exports.regiterMethodRoute = router;
