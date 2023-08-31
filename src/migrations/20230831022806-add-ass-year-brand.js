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
    await queryInterface.addConstraint("car_seris", {
      fields: ["yearReleaseId"],
      type: "foreign key",
      name: "car_seri_car_brand_association",
      references: {
        table: "release_years",
        field: "id",
      },
    });

    await queryInterface.addConstraint("car_seris", {
      fields: ["carBrandId"],
      type: "foreign key",
      name: "car_seri_release_year_association",
      references: {
        table: "car_brands",
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
    await queryInterface.removeConstraint(
      "car_seris",
      "car_seri_car_brand_association"
    );
    await queryInterface.removeConstraint(
      "car_seris",
      "car_seri_release_year_association"
    );
  },
};
