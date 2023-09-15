const db = require("../models");

module.exports.insertNewHistory = (body) => {
  return new Promise(async (resolve, reject) => {
    try {
      await db.user_search_history.create({
        ...body,
        userID: body.userID,
      });
      resolve({ code: 200, message: "success!" });
    } catch (err) {
      reject({ message: err.message });
    }
  });
};

module.exports.getSearchHistoriesService = (userID) => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await db.user_search_history.findAll({ where: { userID } });
      resolve(data);
    } catch (err) {
      reject({ message: err.message });
    }
  });
};
