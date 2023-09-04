const { Exeptions } = require("../utils/ExeptionError");
const erorCode = require("../exeption_code");
const {
  createYearService,
  getAllYearService,
  getReleaseYearByBrandUuidService,
} = require("../services/release_year.service");
module.exports.createYearController = (req, res, next) => {
  createYearService(req.body).then(
    (yearcar) => {
      return res.json(yearcar);
    },
    (err) => {
      next(new Exeptions(err.message, err.status));
    }
  );
};

module.exports.getAllYearController = (req, res, next) => {
  getAllYearService(req.query).then(
    (yearcar) => {
      return res.json(yearcar);
    },
    (err) => {
      next(new Exeptions(err.message, err.status));
    }
  );
};

module.exports.getReleaseYearByBrandUuidController = (req, res, next) => {
  const { brandID } = req.query;
  getReleaseYearByBrandUuidService(brandID).then(
    (years) => {
      res.json(years);
    },
    (err) => {
      next(new Exeptions(err.message, err.status));
    }
  );
};
