const { Exeptions } = require("../utils/ExeptionError");
const erorCode = require("../exeption_code");
const {
  carSeriService,
  getAllcarSeriService,
  getOneCarSeriService,
  getAllCarSeriByRlyAndBrandService,
} = require("../services/car_seri.service");

module.exports.carseriController = (req, res, next) => {
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

module.exports.getAllCarSeriByRlyAndBrandController = (req, res, next) => {
  const { rly_id, brand_id } = req.query;
  getAllCarSeriByRlyAndBrandService({ rly_id, brand_id }).then(
    (seris) => {
      return res.json(seris);
    },
    (err) => {
      next(new Exeptions(err.message, err.status));
    }
  );
};
