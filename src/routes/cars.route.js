const express = require("express");
const { createNewCarController } = require("../controllers/cars.controller");
const router = express.Router();

router.post("/create-a-car", createNewCarController);

module.exports.carRoute = router;
