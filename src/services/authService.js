const db = require("../models");

module.exports.authService = async (email, password) => {
  const found = await db.user.count({ where: { email } });
  return new Promise(async (resolve, reject) => {
    if (!found)
      return reject({
        status: 404,
        message: "Incorrect email ,or you haven't registed yet!",
      });
    const admin = await db.user.findOne({ where: { email } });
    if (admin.password !== password)
      return reject({ status: 400, message: "Incorrect password!" });
    resolve(admin.dataValues);
  });
};
