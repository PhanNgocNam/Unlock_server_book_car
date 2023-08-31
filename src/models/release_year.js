"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class release_year extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ car_brand }) {
      // define association here
      this.belongsToMany(car_brand, {
        through: "car_seri",
        foreignKey: "yearReleaseId",
        as: "brands",
      });
    }
  }
  release_year.init(
    {
      yearUuid: {
        allowNull: false,
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
      },
      year: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "release_year",
    }
  );
  return release_year;
};
