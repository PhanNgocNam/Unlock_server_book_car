const db = require("../models");
const errorCode = require("../exeption_code/index");

module.exports.carModelService = (body) => {
  return new Promise(async (resolve, reject) => {
    try {
      const found = await db.car_model.count({
        where: { carModelName: body },
      });

      if (found)
        return reject({
          status: errorCode.carBrandName_has_been_used,
          message: "carModelName has been used!",
        });
      const carModelName = await db.car_model.create({ carModelName: body });

      resolve(carModelName);
    } catch (err) {
      reject({ message: err.message });
    }
  });
};
