const db = require("../models");
const errorCode = require("../exeption_code/index");

module.exports.createYearService = (body) => {
  return new Promise(async (resolve, reject) => {
    try {
      const found = await db.release_year.count({
        where: { year: body.year },
      });

      if (found)
        return reject({
          status: errorCode.carBrandName_has_been_used,
          message: "Year has been created!",
        });
      const year = await db.release_year.create({
        year: body.year,
      });

      resolve(year);
    } catch (err) {
      reject({ message: err.message });
    }
  });
};
module.exports.getAllYearService = ({ ...query }) => {
  return new Promise(async (resolve, reject) => {
    try {
      const queries = { raw: true, rest: true };
      const response = await db.release_year.findAll({
        where: query,
        ...queries,
      });
      resolve(response);
    } catch (err) {
      reject({ message: err.message });
    }
  });
};
