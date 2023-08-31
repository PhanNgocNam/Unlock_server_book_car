const db = require("../models");
const errorCode = require("../exeption_code/index");

module.exports.carBrandService = (body) => {
  return new Promise(async (resolve, reject) => {
    try {
      const found = await db.car_brand.count({
        where: { carBrandName: body.CarBrand },
      });

      if (found)
        return reject({
          status: errorCode.carBrandName_has_been_used,
          message: "Car brand name has been used!",
        });
      const car_brand = await db.car_brand.create({
        carBrandName: body.CarBrand,
      });

      resolve(car_brand);
    } catch (err) {
      reject({ message: err.message });
    }
  });
};
module.exports.getAllcarBrandService = ({ ...query }) => {
  return new Promise(async (resolve, reject) => {
    try {
      const queries = { raw: true, rest: true };

      const response = await db.car_brand.findAll({
        where: query,
        include: "release_years",
        // ...queries,
      });

      resolve(response);
    } catch (err) {
      reject({ message: err.message });
    }
  });
};
module.exports.getOneCarBrandService = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const queries = { raw: true, rest: true };
      queries.id = id;
      const response = await db.car_brand.findOne({
        where: { carBrandUuid: id },
      });
      resolve(response);
    } catch (err) {
      reject({ message: err.message });
    }
  });
};
