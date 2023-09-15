const db = require("../models");
const { sequelize } = require("../models");
const err_code = require("../exeption_code");

module.exports.createNewCarService = async (body, req) => {
  return new Promise(async (resolve, reject) => {
    const t = await sequelize.transaction();
    try {
      const car = await db.cars.create(
        {
          userUuid: body.userUuid,
          currentLocationInHCM: body.currentLocationInHCM,
          license_plate: body.license_plate,
          phone_owner: body.phone_owner,
          specials: body.specials,
          suggested_price: body.suggested_price,
          car_classification: body.car_classification,
          vin_number: body.vin_number,
          user_id: body.user_id,
          car_brand_id: body.car_brand_id,
          car_seri_id: body.car_seri_id,
          vehicle_type_id: body.vehicle_type_id,
          car_license_id: body.car_license_id,
        },
        { transaction: t }
      );
      const listRegisterMethod = JSON.parse(body.regis)?.map((regi_id) => ({
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

      const profileImgs = req.files?.map((image) => ({
        carID: body.carID,
        url: `${req.protocol}://${req.get("host")}/assets/images/profiles/${
          image.filename
        }`,
        url_thumb: `${req.protocol}://${req.get(
          "host"
        )}/assets/images/profiles/thumb-${image.filename}`,
        profile_type: body.profileType,
        image_layer: body.imageLayer,
      }));
      // console.log(body);
      await db.profile_img.bulkCreate([...profileImgs], { transaction: t });

      await t.commit();

      resolve(car);
    } catch (err) {
      await t.rollback();
      reject({ status: err_code.database_insert_err, message: err.message });
    }
  });
};

module.exports.uploadCarImageService = (body, req) => {
  return new Promise(async (resolve, reject) => {
    try {
      const found = await db.cars.count({ where: { id: body.carID } });
      if (!found) return reject({ status: 404, message: "Xe không tồn tại" });
      const imgs_1 = body.images?.map((image) => ({
        carID: body.carID,
        url: `${req.protocol}://${req.get("host")}/assets/images/cars/${
          image.filename
        }`,
      }));

      const imgs_2 = body.images?.map((image) => ({
        carID: body.carID,
        url: `${req.protocol}://${req.get("host")}/assets/images/cars/thumb-${
          image.filename
        }`,
      }));

      const imgs = await db.car_img.bulkCreate([...imgs_1, ...imgs_2]);
      resolve(imgs);
    } catch (err) {
      reject({ message: err.message });
    }
  });
};

// module.exports.searchCarService = async (q) => {
//   return new Promise(async (resolve, reject) => {
//     try {
//       const data = await db.cars.findAll({
//         [Op.or]: [
//           { name: { [Op.like]: "%" + q + "%" } },
//           { age: { [Op.like]: "%" + q + "%" } },
//           { country: { [Op.like]: "%" + q + "%" } },
//           { position: { [Op.like]: "%" + q + "%" } },
//           { wage: { [Op.like]: "%" + q + "%" } },
//         ],
//       });
//       resolve(data);
//     } catch (err) {
//       reject(new Exeptions(err.message));
//     }
//   });
// };

module.exports.getCarsOfOneUserService = (userUuid) => {
  return new Promise(async (resolve, reject) => {
    try {
      const cars = await db.cars.findAll({
        where: { userUuid: userUuid },
        include: [
          "car_brand",
          "car_model",
          "vehicle_type",
          "license_plate_type",
          "vehicle_type",
          "user",
          "regis",
        ],
      });
      resolve(cars);
    } catch (err) {
      reject({ message: err.message });
    }
  });
};

module.exports.getAllCarService = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const cars = await db.cars.findAll({
        include: [
          "car_brand",
          "vehicle_type",
          "seri",
          "license_plate_type",
          "user",
          "regis",
        ],
      });
      resolve(JSON.stringify(cars));
    } catch (err) {
      reject({ message: err.message });
    }
  });
};

// module.exports.uploadProfileService =

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

module.exports.getOneCarByIdService = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const car = await db.cars.findOne({
        where: { id },
        include: [
          "car_brand",
          "vehicle_type",
          "seri",
          "license_plate_type",
          "regis",
        ],
      });
      const des = car.dataValues;
      resolve({
        ...des,
        user_id: undefined,
        car_seri_id: undefined,
        car_brand_id: undefined,
        vehicle_type_id: undefined,
        car_license_id: undefined,
        car_brand: des.car_brand.carBrandName,
        vehicle_type: des.vehicle_type.vehicleTypeName,
        seri: des.seri.carSeriName,
        license_plate_type: des.license_plate_type.licensePlateTypeName,
        regis: des.regis?.map((regis) => regis.registerMethodName),
      });
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
