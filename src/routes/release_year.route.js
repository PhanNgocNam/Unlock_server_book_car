const express = require("express");
const {
  createYearController,
  getAllYearController,
  getReleaseYearByBrandUuidController,
} = require("../controllers/release_year.controller");
const router = express.Router();

router.post("/createyear", createYearController);
router.get("/getallyear", getAllYearController);
router.get(
  "/get-release-year-by-brand-uuid",
  getReleaseYearByBrandUuidController
);
module.exports.yearRoute = router;
