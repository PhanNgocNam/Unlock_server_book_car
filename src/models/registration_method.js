"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class registration_method extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ cars }) {
      // define association here
      this.belongsToMany(cars, {
        through: "car_register_method",
        foreignKey: "regis_id",
        as: "cars",
      });
    }
  }
  registration_method.init(
    {
      registrationMethodUuid: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
      },
      registerMethodName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      isDeleted: {
        allowNull: false,
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
    },
    {
      sequelize,
      modelName: "registration_method",
    }
  );
  return registration_method;
};
