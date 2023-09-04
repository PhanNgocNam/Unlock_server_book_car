const db = require("../models");
const errorCode = require("../exeption_code/index");
const { Exeptions } = require("../utils/ExeptionError");

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
        carBrandId: body.carBrandId,
        yearReleaseId: body.yearReleaseId,
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
      const response = await db.car_seri.findAll({
        where: query,
        // include: ["years"],
        ...queries,
      });
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

module.exports.getAllCarSeriByRlyAndBrandService = async (body) => {
  return new Promise(async (resolve, reject) => {
    try {
      const seris = await db.car_seri.findAll({
        where: { yearReleaseId: body.rly_id, carBrandId: body.brand_id },
      });
      resolve(seris);
    } catch (err) {
      reject({ message: message.err });
    }
  });
};
