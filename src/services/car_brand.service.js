const db = require("../models");
const errorCode = require("../exeption_code/index");

module.exports.carBrandService = (body) => {
  return new Promise(async (resolve, reject) => {
    try {
      const found = await db.car_brand.count({
        where: { carBrandName: body },
      });

      if (found)
        return reject({
          status: errorCode.carBrandName_has_been_used,
          message: "carBrandName has been used!",
        });
      const car_brand = await db.car_brand.create({ carBrandName: body });

      resolve(car_brand);
    } catch (err) {
      reject({ message: err.message });
    }
  });
};
