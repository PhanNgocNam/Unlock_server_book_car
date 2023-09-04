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
    await queryInterface.addColumn("cars", "release_year", {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
    });

    await queryInterface.addColumn("cars", "seri", {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
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
