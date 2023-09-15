const db = require("../models");
module.exports.getAllCarHave5gService = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await db.cars_have_5g.findAll();
      resolve(data);
    } catch (err) {
      reject({ message: err.message });
    }
  });
};
