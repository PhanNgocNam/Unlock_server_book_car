const { Exeptions } = require("../utils/ExeptionError");
const erorCode = require("../exeption_code");
const {
  carSeriService,
  getAllcarSeriService,
} = require("../services/car_seri.service");
module.exports.carseriController = (req, res, next) => {
  const { carSeriName } = req.body;

  carSeriService(carSeriName).then(
    (carM) => {
      return res.json(carM);
    },
    (err) => {
      next(new Exeptions(err.message, err.status));
    }
  );
};
module.exports.getAllcarSeriController = (req, res, next) => {
  getAllcarSeriService(req.query).then(
    (carM) => {
      return res.json(carM);
    },
    (err) => {
      next(new Exeptions(err.message, err.status));
    }
  );
};
