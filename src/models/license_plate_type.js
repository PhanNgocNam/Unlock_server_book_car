"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class license_plate_type extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ cars }) {
      // define association here
      this.hasMany(cars, { foreignKey: "car_license_id", as: "cars" });
    }
  }
  license_plate_type.init(
    {
      licensePlateTypeUuid: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
      },
      licensePlateTypeName: {
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
      modelName: "license_plate_type",
    }
  );
  return license_plate_type;
};
