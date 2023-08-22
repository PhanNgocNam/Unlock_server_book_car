const { Exeptions } = require("../utils/ExeptionError");
const erorCode = require("../exeption_code");
const { vehicleTypeService } = require("../services/vehicle_type.service");
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
