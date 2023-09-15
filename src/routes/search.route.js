const express = require("express");
const {
  searchLocationController,
  fireSearchLocationDetailController,
  getSearchHistoriesController,
} = require("../controllers/search.controller");

const router = express.Router();

router.get("/locations", searchLocationController);
router.get("/location-details", fireSearchLocationDetailController);
router.get("/histories", getSearchHistoriesController);

module.exports.serchRoute = router;
