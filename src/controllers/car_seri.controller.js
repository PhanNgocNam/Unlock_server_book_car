const { Exeptions } = require("../utils/ExeptionError");
const erorCode = require("../exeption_code");
const {
  carSeriService,
  getAllcarSeriService,
  getOneCarSeriService,
} = require("../services/car_seri.service");
module.exports.carseriController = (req, res, next) => {
  // const { CarSeri } = req.body;

  carSeriService(req.body).then(
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

module.exports.getOneCarSeriController = (req, res, next) => {
  const { id } = req.query;

  getOneCarSeriService(id).then(
    (carM) => {
      return res.json(carM);
    },
    (err) => {
      next(new Exeptions(err.message, err.status));
    }
  );
};
