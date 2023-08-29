const db = require("../models");
const errorCode = require("../exeption_code/index");

module.exports.createdriverService = (body) => {
  return new Promise(async (resolve, reject) => {
    try {
      const found = await db.driver.count({
        where: { driverPhoneNumber: body.driverPhoneNumber },
      });

      if (found)
        return reject({
          status: errorCode.carBrandName_has_been_used,
          message: "Driver phone number has been used!",
        });
      const driver = await db.driver.create({
        driverName: body.driverName,
        driverPhoneNumber: body.driverPhoneNumber,
      });

      resolve(driver);
    } catch (err) {
      reject({ message: err.message });
    }
  });
};
module.exports.getAlldriverService = ({ ...query }) => {
  return new Promise(async (resolve, reject) => {
    try {
      const queries = { raw: true, rest: true };
      const response = await db.driver.findAll({
        where: query,
        ...queries,
      });
      resolve(response);
    } catch (err) {
      reject({ message: err.message });
    }
  });
};
module.exports.getOneDriverService = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const queries = { raw: true, rest: true };
      queries.id = id;
      const response = await db.driver.findOne({
        where: { driverUuid: id },
      });
      resolve(response);
    } catch (err) {
      reject({ message: err.message });
    }
  });
};
