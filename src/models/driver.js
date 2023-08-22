"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class driver extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ cars }) {
      // define association here
      this.belongsTo(cars, { foreignKey: "car_id", as: "cars" });
    }
  }
  driver.init(
    {
      driverUuid: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
      },
      driverName: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      driverPhoneNumber: {
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
      modelName: "driver",
    }
  );
  return driver;
};
