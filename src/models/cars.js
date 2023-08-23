"use strict";
const { Model } = require("sequelize");
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
      car_seri,
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
      this.belongsTo(car_seri, { foreignKey: "car_seri_id", as: "car_seri" });
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
  }
  cars.init(
    {
      carUuid: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
      },
      currentLocationInHCM: {
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
