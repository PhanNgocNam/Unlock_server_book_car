const express = require("express");
const { getTripDetailController } = require("../controllers/trip.controller");
const router = express.Router();

router.get("/details", getTripDetailController);

module.exports.tripRoute = router;
