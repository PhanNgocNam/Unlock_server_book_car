const { Exeptions } = require("../utils/ExeptionError");
const erorCode = require("../exeption_code");

const { registerUserService } = require("../services/user.service");
const { lengthValidate } = require("../utils/validateFunction");

const {
  getUserByEmailService,
  updateIsDeletedUsersService,
} = require("../services/user.service");

module.exports.registerUserController = (req, res, next) => {
  const { email, password, confirmPass, fullname, phoneNumber } = req.body;
  if (password !== confirmPass)
    return next(
      new Exeptions(
        "Password and confirm password should be the same!",
        erorCode.password_not_match
      )
    );
  lengthValidate(
    password,
    6,
    "smaller",
    "Password length must be greater than 6 characters!",
    400
  );

  registerUserService(email, password, fullname, phoneNumber).then(
    (user) => {
      return res.json(user);
    },
    (err) => {
      next(new Exeptions(err.message, err.status));
    }
  );
};

module.exports.registerMutipleUserController = (req, res, next) => {
  const { email, password, fullname, phoneNumber } = req.body;

  if (!req.users) return res.json("nope!");
  req.users.forEach((user, index) => {
    registerUserService(
      user.email || "null",
      user.password || "123456789",
      user.fullname || "null",
      user.phoneNumber || "null"
    ).then(
      (user) => {
        console.log({ [index]: "ok" });
      },
      (err) => {
        next(new Exeptions(err.message, err.status));
      }
    );
  });
};
module.exports.getUserByEmailController = (req, res, next) => {
  getUserByEmailService(req.body).then(
    (user) => {
      return res.json(user);
    },
    (err) => {
      next(new Exeptions(err.message, err.status));
    }
  );
};
module.exports.updateIsDeletedUsersController = (req, res, next) => {
  const { id } = req.query;
  updateIsDeletedUsersService(id, req.body).then(
    (updateUser) => {
      return res.json(updateUser);
    },
    (err) => {
      return next(new Exeptions(err.message, err.status));
    }
  );
};
