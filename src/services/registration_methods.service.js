const db = require("../models");
const errorCode = require("../exeption_code/index");

module.exports.RegistrationmethodsService = (body) => {
  return new Promise(async (resolve, reject) => {
    try {
      const found = await db.registration_method.count({
        where: { registerMethodName: body.RegiterMethod },
      });

      if (found)
        return reject({
          status: errorCode.carBrandName_has_been_used,
          message: "Register method name has been used!",
        });
      const registerMethodName = await db.registration_method.create({
        registerMethodName: body.RegiterMethod,
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
      const response = await db.registration_method.findAll({
        where: query,
        ...queries,
      });
      resolve(response);
    } catch (err) {
      reject({ message: err.message });
    }
  });
};
module.exports.getOneRegistrationmethodsService = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const queries = { raw: true, rest: true };
      queries.id = id;
      const response = await db.registration_method.findOne({
        where: { registrationMethodUuid: id },
      });
      resolve(response);
    } catch (err) {
      reject({ message: err.message });
    }
  });
};
