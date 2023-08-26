const db = require("../models");
const errorCode = require("../exeption_code/index");
const { sendMail } = require("../utils/mailer");
const { vi } = require("../utils/vi");
const jwt = require("jsonwebtoken");
const bcryt = require("bcrypt");

module.exports.authService = async (email, password) => {
  const found = await db.user.count({ where: { email } });
  return new Promise(async (resolve, reject) => {
    if (!found)
      return reject({
        status: 404,
        message: "Incorrect email ,or you haven't registed yet!",
      });
    const admin = await db.user.findOne({ where: { email } });
    const result = await bcryt.compare(password, admin.password);
    if (!result) return reject({ status: 400, message: "Incorrect password!" });
    resolve(admin.dataValues);
  });
};

module.exports.registerUserService = (email, password, protocol, host) => {
  return new Promise(async (resolve, reject) => {
    try {
      const userByEmail = await db.user.count({ where: { email } });
      if (userByEmail) {
        if (userByEmail.isDeleted) {
          return reject({
            status: errorCode.email_has_been_used,
            message: vi.transError.account_removed,
          });
        }
        // if (!userByEmail.isActived) {
        //   return reject(transError.account_not_active);
        // }
        return reject({
          status: errorCode.email_has_been_used,
          message: vi.transError.account_in_use,
        });
      }
      // const hashedPassword = await bcrypt.hash(password, saltRounds);
      const salt = await bcryt.genSalt(10);
      const hashedPassword = await bcryt.hash(password, salt);
      const user = await db.user.create({ email, password: hashedPassword });
      //send mail
      const accessToken = jwt.sign(
        {
          userID: user.id,
          email: user.username,
          permissions: user.permissions,
        },
        process.env.SECRET_KEY
      );
      const linkVerify = `${protocol}://${host}/api/v1/auth/verify/${accessToken}`;
      sendMail(email, vi.transMail.subject, vi.transMail.template(linkVerify))
        .then((success) => {
          resolve(user);
        })
        .catch(async (error) => {
          await db.Users?.destroy({
            where: {
              email: email,
            },
          });
          reject(vi.transMail.send_failed);
        });
    } catch (err) {
      reject({ message: err.message });
    }
  });
};

module.exports.verifyAccount = (token) => {
  return new Promise(async (resolve, reject) => {
    if (!token) return res.sendStatus(401);
    jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
      if (err) return res.sendStatus(403);
      resolve(user);
    });
  });
};
