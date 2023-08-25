const db = require("../models");
const errorCode = require("../exeption_code/index");
const { query } = require("express");

module.exports.createcarModelService = (body) => {
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
module.exports.getAllcarModelService = ({ ...query }) => {
  return new Promise(async (resolve, reject) => {
    try {
      const queries = { raw: true, rest: true };
      const response = await db.car_model.findAll({ where: query, ...queries });
      resolve(response);
    } catch (err) {
      reject({ message: err.message });
    }
  });
};
module.exports.getOneCarModelService = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const queries = { raw: true, rest: true };
      queries.id = id;
      const response = await db.car_model.findOne({
        where: { carModelUuid: id },
      });
      resolve(response);
    } catch (err) {
      reject({ message: err.message });
    }
  });
};
