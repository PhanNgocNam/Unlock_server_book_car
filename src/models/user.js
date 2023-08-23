"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ cars }) {
      // define association here
      this.hasMany(cars, { foreignKey: "user_id", as: "cars" });
    }
  }
  user.init(
    {
      userUuid: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
      },
      email: {
        unique: true,
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notEmpty: { msg: "Email must not be empty!" },
        },
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notEmpty: { msg: "Password must not empty!" },
        },
      },
      fullname: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notEmpty: { msg: "Fullname most not empty!" },
        },
      },
      permissions: {
        allowNull: false,
        type: DataTypes.INTEGER,
        defaultValue: 9,
      },
      hashPassword: {
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
      modelName: "user",
    }
  );
  return user;
};
