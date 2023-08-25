const db = require("../models");
const bcrypt = require("bcrypt");

module.exports.authService = async (email, password) => {
  const found = await db.user.count({ where: { email } });
  return new Promise(async (resolve, reject) => {
    if (!found)
      return reject({
        status: 404,
        message: "Incorrect email ,or you haven't registed yet!",
      });
    const admin = await db.user.findOne({ where: { email } });
    const result = await bcrypt.compare(password, admin.password);
    if (!result) return reject({ status: 400, message: "Incorrect password!" });
    resolve(admin.dataValues);
  });
};
