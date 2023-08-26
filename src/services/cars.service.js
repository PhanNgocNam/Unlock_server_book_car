const db = require("../models");
const { sequelize } = require("../models");
const err_code = require("../exeption_code");

module.exports.createNewCarService = async (body) => {
  return new Promise(async (resolve, reject) => {
    const t = await sequelize.transaction();
    try {
      const car = await db.cars.create(
        {
          currentLocationInHCM: body.currentLocationInHCM,
          user_id: body.user_id,
          car_brand_id: body.car_brand_id,
          car_model_id: body.car_model_id,
          car_seri_id: body.car_seri_id,
          vehicle_type_id: body.vehicle_type_id,
          car_license_id: body.car_license_id,
        },
        { transaction: t }
      );

      const listRegisterMethod = body.regis?.map((regi_id) => ({
        car_id: car.id,
        regis_id: regi_id,
      }));

      await db.car_register_method.bulkCreate(listRegisterMethod, {
        transaction: t,
      });

      await t.commit();

      resolve(car);
    } catch (err) {
      await t.rollback();
      reject({ status: err_code.database_insert_err, message: err.message });
    }
  });
};


module.exports.getCarsOfOneUserService = (userUuid) => {
  return new Promise(async (resolve, reject) => {
    const cars = await db.cars.findAll({
      where: { userUuid },
      include: [
        "car_brand",
        "car_model",
        "vehicle_type",
        "license_plate_type",
        "vehicle_type",
        "car_seri",
        "user",
        "regis",
      ],
    });
    if (cars.length === 0)
      return reject({ status: 404, message: "You haven't created a car yet!" });
    resolve(cars);

module.exports.getAllCarService = ({ ...query }) => {
  return new Promise(async (resolve, reject) => {
    try {
      const cars = await db.cars.findAll({
        include: [
          "car_brand",
          "car_model",
          "vehicle_type",
          "license_plate_type",
          "vehicle_type",
          "car_seri",
          "user",
          "regis",
        ],
      });
      // db.cars.add;
      resolve(cars);
    } catch (err) {
      reject({ message: err.message });
    }

  });
};
