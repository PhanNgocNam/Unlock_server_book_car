const express = require("express");
const {
  createYearController,
  getAllYearController,
} = require("../controllers/release_year.controller");
const router = express.Router();

router.post("/createyear", createYearController);
router.get("/getallyear", getAllYearController);
module.exports.yearRoute = router;
