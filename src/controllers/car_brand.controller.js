const { Exeptions } = require("../utils/ExeptionError");
const erorCode = require("../exeption_code");
const {
  carBrandService,
  getAllcarBrandService,
} = require("../services/car_brand.service");
module.exports.carBrandController = (req, res, next) => {
  const { carBrandName } = req.body;

  carBrandService(carBrandName).then(
    (carB) => {
      return res.json(carB);
    },
    (err) => {
      next(new Exeptions(err.message, err.status));
    }
  );
};
module.exports.getAllcarBrandController = (req, res, next) => {
  getAllcarBrandService(req.query).then(
    (carM) => {
      return res.json(carM);
    },
    (err) => {
      next(new Exeptions(err.message, err.status));
    }
  );
};
