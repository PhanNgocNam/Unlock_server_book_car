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
