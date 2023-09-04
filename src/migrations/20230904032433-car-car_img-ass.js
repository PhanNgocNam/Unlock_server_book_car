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
    await queryInterface.addConstraint("car_imgs", {
      fields: ["carID"],
      name: "car-car_img-ass",
      type: "foreign key",
      references: {
        table: "cars",
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
    await queryInterface.removeConstraint("car_imgs", "car-car_img-ass");
  },
};
