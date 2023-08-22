const jwt = require("jsonwebtoken");
const { authService } = require("../services/authService");
const { Exeptions } = require("../utils/ExeptionError");

module.exports.authController = async (req, res, next) => {
  const { email, password } = req.body;
  authService(email, password).then(
    (admin) => {
      const accessToken = jwt.sign(
        {
          userID: admin.id,
          email: admin.username,
          permissions: admin.permissions,
        },
        process.env.SECRET_KEY
      );
      res.json({ accessToken });
    },
    (err) => {
      const error = new Exeptions(err.message, err.status);
      next(error);
    }
  );
};
