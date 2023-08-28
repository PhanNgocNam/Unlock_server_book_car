const db = require("../models");
const errorCode = require("../exeption_code/index");
const bcryt = require("bcrypt");

module.exports.registerUserService = (
  email,
  password,
  fullname,
  phoneNumber
) => {
  return new Promise(async (resolve, reject) => {
    try {
      const found = await db.user.count({ where: { email } });
      if (found)
        return reject({
          status: errorCode.email_has_been_used,
          message: "Email has been used!",
        });

      const salt = await bcryt.genSalt(10);
      const hashedPassword = await bcryt.hash(password, salt);
      const user = await db.user.create({
        email,
        password: hashedPassword,
        fullname,
        phoneNumber: phoneNumber,
      });
      resolve(user);
    } catch (err) {
      reject({ message: err.message });
    }
  });
};

module.exports.getUserByEmailService = (body) => {
  return new Promise(async (resolve, reject) => {
    try {
      const queries = { raw: true, rest: true };

      const response = await db.user.findOne({
        where: { email: body.email },
        include: ["cars"],
      });
      resolve(response);
    } catch (err) {
      reject({ message: err.message });
    }
  });
};
