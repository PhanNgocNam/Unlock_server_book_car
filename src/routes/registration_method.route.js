const express = require("express");
const {
  RegistrationmethodsController,
  getAllRegistrationmethodsController,
  getOneRegistrationmethodsController,
} = require("../controllers/registration_methods.controller");
const router = express.Router();

router.post("/createRegiterMethod", RegistrationmethodsController);
router.get("/getregistrationmethod", getAllRegistrationmethodsController);
router.get("/getoneregistrationmethod", getOneRegistrationmethodsController);
module.exports.regiterMethodRoute = router;
