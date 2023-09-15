"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class car_seri extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ cars, car_brand }) {
      // define association here
      this.hasMany(cars, { foreignKey: "car_seri_id", as: "cars" });
      this.belongsTo(car_brand, { foreignKey: "car_brand_id", as: "brand" });
    }
  }
  car_seri.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      carSeriUuid: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
      },
      carSeriName: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      car_brand_id: { allowNull: false, type: DataTypes.INTEGER },
      isDeleted: {
        allowNull: false,
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
    },
    {
      sequelize,
      modelName: "car_seri",
    }
  );
  return car_seri;
};
