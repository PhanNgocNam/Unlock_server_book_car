"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class car_img extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ cars }) {
      // define association here
      this.belongsTo(cars);
    }
  }
  car_img.init(
    {
      imgUuid: {
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
      },
      url: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      carID: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "car_img",
    }
  );
  return car_img;
};
