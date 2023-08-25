const express = require("express");
const { registerUserController } = require("../controllers/user.controller");
const router = express.Router();

// router.post("/register-user", registerUserController);

module.exports.userRoute = router;
