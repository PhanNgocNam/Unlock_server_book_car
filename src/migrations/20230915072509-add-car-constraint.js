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
    await queryInterface.addConstraint("cars", {
      fields: ["car_profile_id"],
      type: "foreign key",
      name: "car_profile_association",
      references: {
        table: "profile_imgs",
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
  },
};
