const { Exeptions } = require("../utils/ExeptionError");
const erorCode = require("../exeption_code");
const {
  vehicleTypeService,
  getAllvehicleTypeService,
  getOneVehicleTypeService,
} = require("../services/vehicle_type.service");
module.exports.vehicleTypeController = (req, res, next) => {
  const { VehicleType } = req.body;

  vehicleTypeService(VehicleType).then(
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
module.exports.getOneVehicleTypeController = (req, res, next) => {
  const { id } = req.query;

  getOneVehicleTypeService(id).then(
    (carM) => {
      return res.json(carM);
    },
    (err) => {
      next(new Exeptions(err.message, err.status));
    }
  );
};
