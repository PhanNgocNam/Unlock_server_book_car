const { Exeptions } = require("../utils/ExeptionError");
const erorCode = require("../exeption_code");
const { registerUserService } = require("../services/user.service");

module.exports.registerUserController = (req, res, next) => {
  const { email, password, confirmPass } = req.body;
  if (password !== confirmPass)
    return next(
      new Exeptions(
        "Password and confirm password should be the same!",
        erorCode.password_not_match
      )
    );

  registerUserService(email, password).then(
    (user) => {
      return res.json(user);
    },
    (err) => {
      next(new Exeptions(err.message, err.status));
    }
  );
};
