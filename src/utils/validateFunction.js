const { Exeptions } = require("./ExeptionError");

module.exports.validate = (value, samplePattern, errMsg, status) => {
  const pattern = new RegExp(samplePattern);
  const result = pattern.test(value);
  if (!result) throw new Exeptions(errMsg, status);
};

module.exports.lengthValidate = (value, anchor, type, errMsg, stautus) => {
  switch (type) {
    case "greater":
      const result_ = value > anchor;
      if (!result_) throw new Exeptions(errMsg, stautus);
      break;
    case "smaller":
      const result = value < anchor;
      if (!result) throw new Exeptions(errMsg, stautus);
      break;
  }
};
