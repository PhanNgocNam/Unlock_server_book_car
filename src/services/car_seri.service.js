const db = require("../models");
const errorCode = require("../exeption_code/index");

module.exports.carSeriService = (body) => {
  return new Promise(async (resolve, reject) => {
    try {
      const found = await db.car_seri.count({
        where: { carSeriName: body.CarSeri },
      });

      if (found)
        return reject({
          status: errorCode.carBrandName_has_been_used,
          message: "Car seri name has been used!",
        });
      const carSeriName = await db.car_seri.create({
        carSeriName: body.CarSeri,
      });

      resolve(carSeriName);
    } catch (err) {
      reject({ message: err.message });
    }
  });
};
module.exports.getAllcarSeriService = ({ ...query }) => {
  return new Promise(async (resolve, reject) => {
    try {
      const queries = { raw: true, rest: true };
      const response = await db.car_seri.findAll({ where: query, ...queries });
      resolve(response);
    } catch (err) {
      reject({ message: err.message });
    }
  });
};
module.exports.getOneCarSeriService = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const queries = { raw: true, rest: true };
      queries.id = id;
      const response = await db.car_seri.findOne({
        where: { carSeriUuid: id },
      });
      resolve(response);
    } catch (err) {
      reject({ message: err.message });
    }
  });
};
