const {
  createNewCarService,
  getAllCarService,
} = require("../services/cars.service");
const { Exeptions } = require("../utils/ExeptionError");

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
module.exports.getAllCarController = (req, res, next) => {
  getAllCarService(req.body).then(
    (carM) => {
      return res.json(carM);
    },
    (err) => {
      return next(new Exeptions(err.message, err.status));
    }
  );
};
