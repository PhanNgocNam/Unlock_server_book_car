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
    await queryInterface.addColumn("cars", "license_plate", {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
    });

    await queryInterface.addColumn("cars", "phone_owner", {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
    });

    await queryInterface.addColumn("cars", "vin_number", {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "null",
    });
  },

  async down(queryInterface, DataTypes) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeColumn("cars", "license_plate");
    await queryInterface.removeColumn("cars", "phone_owner");
    await queryInterface.removeColumn("cars", "vin_number");
  },
};
