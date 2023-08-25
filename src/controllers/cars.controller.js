const { createNewCarService } = require("../services/cars.service");
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
