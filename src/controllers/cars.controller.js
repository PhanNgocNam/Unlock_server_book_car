const {
  createNewCarService,
  getCarsOfOneUserService,
  getAllCarService,
} = require("../services/cars.service");
const { Exeptions } = require("../utils/ExeptionError");

const db = require("../models");

module.exports.createNewCarController = (req, res, next) => {
  createNewCarService(req.body).then(
    (car) => {
      return res.json({ status: 200, message: "success!" });
    },
    (err) => {
      return next(new Exeptions(err.message, err.status));
    }
  );
};

module.exports.getCarsOfOneUserController = async (req, res, next) => {
  getCarsOfOneUserService(req.user.userUuid).then(
    (cars) => res.json({ cars }),
    (err) => next(new Exeptions(err.message, err.status))
  );
};

module.exports.getAllCarController = (req, res, next) => {
  getAllCarService(req.body).then(
    (allCar) => {
      return res.json(allCar);
    },
    (err) => {
      return next(new Exeptions(err.message, err.status));
    }
  );
};
