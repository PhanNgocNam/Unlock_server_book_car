const { Exeptions } = require("../utils/ExeptionError");
const erorCode = require("../exeption_code");
const {
  createcarModelService,
  getAllcarModelService,
} = require("../services/car_model.service");
module.exports.createcarModelController = (req, res, next) => {
  const { carModelName } = req.body;

  createcarModelService(carModelName).then(
    (carM) => {
      return res.json(carM);
    },
    (err) => {
      next(new Exeptions(err.message, err.status));
    }
  );
};
module.exports.getAllcarModelController = (req, res, next) => {
  getAllcarModelService(req.query).then(
    (carM) => {
      return res.json(carM);
    },
    (err) => {
      next(new Exeptions(err.message, err.status));
    }
  );
};
