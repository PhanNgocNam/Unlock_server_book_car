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
    await queryInterface.addColumn("car_seris", "car_brand_id", {
      type: DataTypes.INTEGER,
    });

    await queryInterface.addConstraint("car_seris", {
      fields: ["car_brand_id"],
      type: "foreign key",
      name: "seri_brand_association",
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
  },
};
