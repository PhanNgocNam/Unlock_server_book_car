const express = require("express");
const {
  findCarsController,
  insertToDB,
} = require("../controllers/find_cars.controller");
const router = express.Router();

router.get("/", findCarsController);

router.get("/insert", insertToDB);

module.exports.findCarsRouter = router;
