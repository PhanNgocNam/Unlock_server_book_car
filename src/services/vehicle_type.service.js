const db = require("../models");
const errorCode = require("../exeption_code/index");

module.exports.vehicleTypeService = (body) => {
  return new Promise(async (resolve, reject) => {
    try {
      const found = await db.vehicle_type.count({
        where: { vehicleTypeName: body },
      });

      if (found)
        return reject({
          status: errorCode.carBrandName_has_been_used,
          message: "vehicleTypeName has been used!",
        });
      const vehicleTypeName = await db.vehicle_type.create({
        vehicleTypeName: body,
      });

      resolve(vehicleTypeName);
    } catch (err) {
      reject({ message: err.message });
    }
  });
};
module.exports.getAllvehicleTypeService = ({ ...query }) => {
  return new Promise(async (resolve, reject) => {
    try {
      const queries = { raw: true, rest: true };
      const response = await db.vehicle_type.findAll({
        where: query,
        ...queries,
      });
      resolve(response);
    } catch (err) {
      reject({ message: err.message });
    }
  });
};
module.exports.getOneVehicleTypeService = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const queries = { raw: true, rest: true };
      queries.id = id;
      const response = await db.vehicle_type.findOne({
        where: { vehicleTypeUuid: id },
      });
      resolve(response);
    } catch (err) {
      reject({ message: err.message });
    }
  });
};
