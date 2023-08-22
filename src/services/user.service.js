const db = require("../models");
const errorCode = require("../exeption_code/index");

module.exports.registerUserService = (email, password) => {
  return new Promise(async (resolve, reject) => {
    try {
      const found = await db.user.count({ where: { email } });
      if (found)
        return reject({
          status: errorCode.email_has_been_used,
          message: "Email has been used!",
        });
      const user = await db.user.create({ email, password });
      resolve(user);
    } catch (err) {
      reject({ message: err.message });
    }
  });
};
