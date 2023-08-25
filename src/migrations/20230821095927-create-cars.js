"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable("cars", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      carUuid: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
      },
      currentLocationInHCM: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      isDeleted: {
        allowNull: false,
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      user_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      car_brand_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      car_model_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      car_seri_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      vehicle_type_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      car_license_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    });
  },
  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable("cars");
  },
};
