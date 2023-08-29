const { Exeptions } = require("../utils/ExeptionError");
const erorCode = require("../exeption_code");
const {
  RegistrationmethodsService,
  getAllRegistrationmethodsService,
  getOneRegistrationmethodsService,
} = require("../services/registration_methods.service");
module.exports.RegistrationmethodsController = (req, res, next) => {
  RegistrationmethodsService(req.body).then(
    (car) => {
      return res.json(car);
    },
    (err) => {
      next(new Exeptions(err.message, err.status));
    }
  );
};
module.exports.getAllRegistrationmethodsController = (req, res, next) => {
  getAllRegistrationmethodsService(req.query).then(
    (carM) => {
      return res.json(carM);
    },
    (err) => {
      next(new Exeptions(err.message, err.status));
    }
  );
};
module.exports.getOneRegistrationmethodsController = (req, res, next) => {
  const { id } = req.query;

  getOneRegistrationmethodsService(id).then(
    (carM) => {
      return res.json(carM);
    },
    (err) => {
      next(new Exeptions(err.message, err.status));
    }
  );
};
