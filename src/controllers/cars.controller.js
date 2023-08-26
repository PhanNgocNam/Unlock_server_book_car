const {
  createNewCarService,
  getCarsOfOneUserService,
} = require("../services/cars.service");
const { Exeptions } = require("../utils/ExeptionError");

const db = require("../models");

module.exports.createNewCarController = (req, res, next) => {
  createNewCarService(req.body).then(
    (car) => {
      return res.json({ status: "ok" });
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
