const { Exeptions } = require("../utils/ExeptionError");
const erorCode = require("../exeption_code");
const {
  RegistrationmethodsService,
} = require("../services/registration_methods.service");
module.exports.RegistrationmethodsController = (req, res, next) => {
  const { RegiterMethod } = req.body;

  RegistrationmethodsService(RegiterMethod).then(
    (car) => {
      return res.json(car);
    },
    (err) => {
      next(new Exeptions(err.message, err.status));
    }
  );
};
module.exports.getAllvehicleTypeController = (req, res, next) => {
  getAllvehicleTypeService(req.query).then(
    (carM) => {
      return res.json(carM);
    },
    (err) => {
      next(new Exeptions(err.message, err.status));
    }
  );
};
