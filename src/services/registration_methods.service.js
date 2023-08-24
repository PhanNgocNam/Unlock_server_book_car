const db = require("../models");
const errorCode = require("../exeption_code/index");

module.exports.RegistrationmethodsService = (body) => {
  return new Promise(async (resolve, reject) => {
    try {
      const found = await db.registration_method.count({
        where: { registerMethodName: body },
      });

      if (found)
        return reject({
          status: errorCode.carBrandName_has_been_used,
          message: "registerMethodName has been used!",
        });
      const registerMethodName = await db.registration_method.create({
        registerMethodName: body,
      });

      resolve(registerMethodName);
    } catch (err) {
      reject({ message: err.message });
    }
  });
};
module.exports.getAllRegistrationmethodsService = ({ ...query }) => {
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
