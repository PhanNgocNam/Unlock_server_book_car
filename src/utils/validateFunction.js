const { Exeptions } = require("./ExeptionError");

module.exports.validate = (value, samplePattern, errMsg, status) => {
  const pattern = new RegExp(samplePattern);
  const result = pattern.test(value);
  if (!result) throw new Exeptions(errMsg, status);
};

// module.exports.lengthValidate = (value, anchor, type, errMsg, stautus) => {
//   if (type == "greater") {
//     const result_ = value > anchor;
//     if (!result_) throw new Exeptions(errMsg, stautus);
//   }

//   if (type === "smaller") {
//     const result = value < anchor;
//     if (!result) throw new Exeptions(errMsg, stautus);
//   }
// };
