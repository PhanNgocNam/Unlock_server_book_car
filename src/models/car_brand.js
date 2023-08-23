"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class car_brand extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ cars }) {
      // define association here
      this.hasMany(cars, { foreignKey: "car_brand_id", as: "cars" });
    }
  }
  car_brand.init(
    {
      carBrandUuid: {
        allowNull: false,
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
      },
      carBrandName: {
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
      modelName: "car_brand",
    }
  );
  return car_brand;
};
