"use strict";
const { Model } = require("sequelize");
const { Exeptions } = require("../utils/ExeptionError");
module.exports = (sequelize, DataTypes) => {
  class profile_img extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ cars }) {
      // define association here
      this.hasMany(cars, { foreignKey: "car_profile_id", as: "cars" });
    }
  }
  profile_img.init(
    {
      carID: { type: DataTypes.INTEGER, allowNull: false },
      imgUuid: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
      },
      url: { type: DataTypes.STRING, allowNull: false },
      url_thumb: { type: DataTypes.STRING, allowNull: false },
      profile_type: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      image_layer: {
        type: DataTypes.ENUM(["front", "back"]),
        validate: {
          isValidLayer(value) {
            if (!["front", "back"].includes(value)) {
              throw new Exeptions(
                400,
                "Giá trị cho image_layer phải là /front/ hoặc /back/"
              );
            }
          },
        },
      },
    },
    {
      sequelize,
      modelName: "profile_img",
    }
  );
  return profile_img;
};
