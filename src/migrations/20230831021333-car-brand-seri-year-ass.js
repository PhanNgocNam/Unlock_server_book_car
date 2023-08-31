"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, DataTypes) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: DataTypes.INTEGER });
     */
    await queryInterface.addColumn("car_seris", "carBrandId", {
      type: DataTypes.INTEGER,
      allowNull: false,
    });

    await queryInterface.addColumn("car_seris", "yearReleaseId", {
      type: DataTypes.INTEGER,
      allowNull: false,
    });
  },

  async down(queryInterface, DataTypes) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
