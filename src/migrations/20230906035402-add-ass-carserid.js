"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, DataTypes) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addConstraint("cars", {
      fields: ["carseriID"],
      type: "foreign key",
      name: "car_seris_car_association",
      references: {
        table: "car_seris",
        field: "id",
      },
    });
  },

  async down(queryInterface, DataTypes) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeConstraint("cars", "car_seris_car_association");
  },
};
