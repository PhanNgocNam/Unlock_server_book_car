const db = require("../models");
const errorCode = require("../exeption_code/index");

module.exports.licensePlateTypeService = (body) => {
  return new Promise(async (resolve, reject) => {
    try {
      const found = await db.license_plate_type.count({
        where: { licensePlateTypeName: body },
      });

      if (found)
        return reject({
          status: errorCode.carBrandName_has_been_used,
          message: "licensePlateTypeName has been used!",
        });
      const licensePlateTypeName = await db.license_plate_type.create({
        licensePlateTypeName: body,
      });

      resolve(licensePlateTypeName);
    } catch (err) {
      reject({ message: err.message });
    }
  });
};
module.exports.getAlllicensePlateTypeService = ({ ...query }) => {
  return new Promise(async (resolve, reject) => {
    try {
      const queries = { raw: true, rest: true };
      const response = await db.license_plate_type.findAll({
        where: query,
        ...queries,
      });
      resolve(response);
    } catch (err) {
      reject({ message: err.message });
    }
  });
};
