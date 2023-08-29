"use strict";
const { Model } = require("sequelize");
const { validate } = require("../utils/validateFunction");
const { Exeptions } = require("../utils/ExeptionError");
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
        defaultValue: "null",
        validate: {
          checkIsEmail: function (value) {
            validate(
              value,
              "^[\\w-.]+@([\\w-]+\\.)+[\\w-]{2,4}$",
              "You must use a valid email address!",
              400
            );
          },
        },
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      fullname: {
        allowNull: true,
        type: DataTypes.STRING,
        defaultValue: "null",
      },
      permissions: {
        allowNull: false,
        type: DataTypes.INTEGER,
        defaultValue: 9,
      },
      phoneNumber: {
        allowNull: false,
        type: DataTypes.STRING,
        defaultValue: "null",
      },
      isDeleted: {
        allowNull: false,
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      isVerify: {
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
