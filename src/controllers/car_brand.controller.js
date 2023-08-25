const { Exeptions } = require("../utils/ExeptionError");
const erorCode = require("../exeption_code");
const {
  carBrandService,
  getAllcarBrandService,
  getOneCarBrandService,
} = require("../services/car_brand.service");
module.exports.carBrandController = (req, res, next) => {
  const { CarBrand } = req.body;

  carBrandService(CarBrand).then(
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
module.exports.getOneCarBrandController = (req, res, next) => {
  const { id } = req.query;

  getOneCarBrandService(id).then(
    (carM) => {
      return res.json(carM);
    },
    (err) => {
      next(new Exeptions(err.message, err.status));
    }
  );
};
