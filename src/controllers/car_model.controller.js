const { Exeptions } = require("../utils/ExeptionError");
const erorCode = require("../exeption_code");
const { carModelService } = require("../services/car_model.service");
module.exports.carModelController = (req, res, next) => {
  const { carModelName } = req.body;

  carModelService(carModelName).then(
    (carM) => {
      return res.json(carM);
    },
    (err) => {
      next(new Exeptions(err.message, err.status));
    }
  );
};
