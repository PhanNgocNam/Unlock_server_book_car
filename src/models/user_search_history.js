"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UserSearchHistory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ user }) {
      // define association here
      this.belongsTo(user, { foreignKey: "userID", as: "user" });
    }
  }
  UserSearchHistory.init(
    {
      display: { allowNull: false, type: DataTypes.STRING },
      name: DataTypes.STRING,
      hs_num: DataTypes.INTEGER,
      street: DataTypes.STRING,
      address: DataTypes.STRING,
      city_id: DataTypes.INTEGER,
      city: DataTypes.INTEGER,
      district_id: DataTypes.INTEGER,
      ward_id: DataTypes.INTEGER,
      ward: DataTypes.STRING,
      district: DataTypes.STRING,
      lat: { allowNull: false, type: DataTypes.DOUBLE },
      lng: { allowNull: false, type: DataTypes.DOUBLE },
    },
    {
      sequelize,
      modelName: "user_search_history",
    }
  );
  return UserSearchHistory;
};
