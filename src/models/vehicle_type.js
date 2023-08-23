"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class vehicle_type extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ cars }) {
      // define association here
      this.hasMany(cars, { foreignKey: "vehicle_type_id", as: "cars" });
    }
  }
  vehicle_type.init(
    {
      vehicleTypeUuid: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
      },
      vehicleTypeName: {
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
      modelName: "vehicle_type",
    }
  );
  return vehicle_type;
};
