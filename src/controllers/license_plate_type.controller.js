const { Exeptions } = require("../utils/ExeptionError");
const erorCode = require("../exeption_code");
const {
  licensePlateTypeService,
} = require("../services/license_Plate_Type.service");
module.exports.licensePlateTypeController = (req, res, next) => {
  const { licensePlateTypeName } = req.body;

  licensePlateTypeService(licensePlateTypeName).then(
    (carB) => {
      return res.json(carB);
    },
    (err) => {
      next(new Exeptions(err.message, err.status));
    }
  );
};
