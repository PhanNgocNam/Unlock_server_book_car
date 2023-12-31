"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class refreshToken extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
    toJSON() {
      return this.get("refreshToken");
    }
  }
  refreshToken.init(
    {
      userUuid: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      refreshToken: { type: DataTypes.STRING },
    },
    {
      sequelize,
      modelName: "refreshToken",
    }
  );
  return refreshToken;
};
