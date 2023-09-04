"use strict";
const { Model } = require("sequelize");
const { validate } = require("../utils/validateFunction");
module.exports = (sequelize, DataTypes) => {
  class cars extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({
      user,
      vehicle_type,
      registration_method,
      license_plate_type,
      driver,
      car_model,
      car_brand,
    }) {
      // define association here
      this.belongsTo(user, { foreignKey: "user_id", as: "user" });
      this.belongsTo(car_brand, {
        foreignKey: "car_brand_id",
        as: "car_brand",
      });
      this.belongsTo(car_model, {
        foreignKey: "car_model_id",
        as: "car_model",
      });
      this.belongsTo(vehicle_type, {
        foreignKey: "vehicle_type_id",
        as: "vehicle_type",
      });
      this.belongsTo(license_plate_type, {
        foreignKey: "car_license_id",
        as: "license_plate_type",
      });
      this.hasOne(driver, { foreignKey: "car_id", as: "driver" });
      this.belongsToMany(registration_method, {
        through: "car_register_method",
        foreignKey: "car_id",
        as: "regis",
      });
    }

    toJSON() {
      return {
        ...this.get(),
        license_plate_type: this.get("license_plate_type").licensePlateTypeName,
        vehicle_type: this.get("vehicle_type").vehicleTypeName,
        car_model: this.get("car_model").carModelName,
        car_brand: this.get("car_brand").carBrandName,
        regis: this.get("regis")?.map(
          (regis_method) => regis_method.registerMethodName
        ),
        user: this.get("user").email,
        user_id: undefined,
        car_brand_id: undefined,
        car_model_id: undefined,
        vehicle_type_id: undefined,
        car_license_id: undefined,
      };
    }
  }
  cars.init(
    {
      userUuid: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      carUuid: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
      },
      currentLocationInHCM: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      license_plate: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phone_owner: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          checkPhoneValid: function (value) {
            validate(
              value,
              /(84|0[35789])([0-9]{8})\b/,
              "Số điện thoại không hợp lệ!",
              400
            );
          },
        },
      },
      vin_number: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "null",
        validate: {
          checkVinNumber: function (value) {
            validate(
              value,
              /\b[A-HJ-NPR-Z0-9]{17}\b/,
              "Số khung không hợp lệ!",
              400
            );
          },
        },
      },
      release_year: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      brand: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      isDeleted: {
        allowNull: false,
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
    },
    {
      sequelize,
      modelName: "cars",
    }
  );
  return cars;
};
