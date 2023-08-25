const { Exeptions } = require("../utils/ExeptionError");
const erorCode = require("../exeption_code");
const {
  createdriverService,
  getAlldriverService,
  getOneDriverService,
} = require("../services/driver.service");
module.exports.createdriverController = (req, res, next) => {
  createdriverService(req.body).then(
    (car) => {
      return res.json(car);
    },
    (err) => {
      next(new Exeptions(err.message, err.status));
    }
  );
};
module.exports.getAllDriverController = (req, res, next) => {
  getAlldriverService(req.query).then(
    (carM) => {
      return res.json(carM);
    },
    (err) => {
      next(new Exeptions(err.message, err.status));
    }
  );
};
module.exports.getOneDriverController = (req, res, next) => {
  const { id } = req.query;

  getOneDriverService(id).then(
    (carM) => {
      return res.json(carM);
    },
    (err) => {
      next(new Exeptions(err.message, err.status));
    }
  );
};
