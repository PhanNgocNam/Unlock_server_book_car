const db = require("../models");
const { Op } = require("sequelize");
const { sequelize } = require("../models");
const err_code = require("../exeption_code");
const { Exeptions } = require("../utils/ExeptionError");

module.exports.createNewCarService = async (body) => {
  return new Promise(async (resolve, reject) => {
    const t = await sequelize.transaction();
    try {
      const car = await db.cars.create(
        {
          userUuid: body.userUuid,
          currentLocationInHCM: body.currentLocationInHCM,
          license_plate: body.license_plate,
          phone_owner: body.phone_owner,
          vin_number: body.vin_number,
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

      if (!listRegisterMethod.length)
        return reject({
          status: 400,
          message: "Vui lòng chọn ít nhất một hình thức đăng ký!",
        });
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

module.exports.searchCarService = async (q) => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await db.cars.findAll({
        [Op.or]: [
          { name: { [Op.like]: "%" + q + "%" } },
          { age: { [Op.like]: "%" + q + "%" } },
          { country: { [Op.like]: "%" + q + "%" } },
          { position: { [Op.like]: "%" + q + "%" } },
          { wage: { [Op.like]: "%" + q + "%" } },
        ],
      });
      resolve(data);
    } catch (err) {
      reject(new Exeptions(err.message));
    }
  });
};

module.exports.getCarsOfOneUserService = (useUuid) => {
  return new Promise(async (resolve, reject) => {
    const cars = await db.cars.findAll({
      where: { userUuid: useUuid },
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
  });
};

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

module.exports.updateCarService = async (id, body) => {
  return new Promise(async (resolve, reject) => {
    const t = await sequelize.transaction();
    try {
      const car = await db.cars.findOne({ where: { caruuid: id } });
      await car.update(body);

      const listRegisterMethod = body.regis?.map((regi_id) => ({
        car_id: car.id,
        regis_id: regi_id,
      }));

      if (body.regis) {
        await db.car_register_method.destroy(
          {
            where: { car_id: car.id },
          },
          { transaction: t }
        );
      }

      if (body.regis) {
        await db.car_register_method.bulkCreate(listRegisterMethod, {
          transaction: t,
        });
      }

      await t.commit();

      resolve({
        message: "Success!",
        status: 200,
      });
    } catch (err) {
      await t.rollback();
      reject({ status: err_code.update_car_err, message: err.message });
    }
  });
};
module.exports.updateIsdeletedCarService = async (id, body) => {
  return new Promise(async (resolve, reject) => {
    try {
      const car = await db.cars.findOne({ where: { caruuid: id } });
      await car.update(body);
      resolve({
        message: "Success!",
        status: 200,
      });
    } catch (err) {
      reject({ status: err_code.update_car_err, message: err.message });
    }
  });
};
module.exports.getAllCarByIdService = ({ id }) => {
  return new Promise(async (resolve, reject) => {
    try {
      const cars = await db.cars.findAll(
        { where: { userUuid: id } },
        {
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
        }
      );
      // db.cars.add;
      resolve(cars);
    } catch (err) {
      reject({ message: err.message });
    }
  });
};
module.exports.finhCarByUserService = (userUuid, car) => {
  return new Promise(async (resolve, reject) => {
    try {
      var cars = await sequelize.query(
        `SELECT users.email,currentLocationInHCM,car_brands.carBrandName,car_models.carModelName ,vehicle_types.vehicleTypeName,vin_number,phone_owner,license_plate,license_plate_types.licensePlateTypeName FROM cars JOIN car_brands ON cars.car_brand_id = car_brands.id JOIN car_models ON cars.car_model_id = car_models.id JOIN users ON cars.user_id = users.id  JOIN vehicle_types ON cars.vehicle_type_id = vehicle_types.id  JOIN license_plate_types ON cars.car_license_id = license_plate_types.id 
         WHERE cars.useruuid = '${userUuid}' AND car_brands.carBrandName LIKE '%${car}%'`
      );
      if (cars[0].length < 1) {
        cars = await sequelize.query(
          `SELECT users.email,currentLocationInHCM,car_brands.carBrandName,car_models.carModelName ,vehicle_types.vehicleTypeName,vin_number,phone_owner,license_plate,license_plate_types.licensePlateTypeName FROM cars JOIN car_brands ON cars.car_brand_id = car_brands.id JOIN car_models ON cars.car_model_id = car_models.id JOIN users ON cars.user_id = users.id  JOIN vehicle_types ON cars.vehicle_type_id = vehicle_types.id  JOIN license_plate_types ON cars.car_license_id = license_plate_types.id 
           WHERE cars.useruuid = '${userUuid}' AND car_models.carModelName LIKE '%${car}%'`
        );
      }
      const uniqueCars = [];

      for (const row of cars[0]) {
        const existingCarUuids = uniqueCars.map((car) => car.carUuid);
        if (!existingCarUuids.includes(row.carUuid)) {
          uniqueCars.push(row);
        }
      }

      resolve(uniqueCars);
    } catch (error) {
      reject(error);
    }
  });
};
