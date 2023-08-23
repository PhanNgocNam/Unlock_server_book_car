const { Exeptions } = require("../utils/ExeptionError");
const erorCode = require("../exeption_code");
const {
  vehicleTypeService,
  getAllvehicleTypeService,
} = require("../services/vehicle_type.service");
module.exports.vehicleTypeController = (req, res, next) => {
  const { vehicleTypeName } = req.body;

  vehicleTypeService(vehicleTypeName).then(
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
