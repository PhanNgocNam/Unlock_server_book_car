"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class car_register_method extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  car_register_method.init(
    {
      res_car_uuid: {
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
      car_id: DataTypes.INTEGER,
      regis_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "car_register_method",
    }
  );
  return car_register_method;
};
