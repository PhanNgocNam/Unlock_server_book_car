"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable("users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
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
        defaultValue: "null",
        validate: {
          notEmpty: { msg: "Fullname most not empty!" },
        },
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
      isActive: {
        allowNull: false,
        type: DataTypes.INTEGER,
        defaultValue: 0,
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
    await queryInterface.dropTable("users");
  },
};
