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
    queryInterface.addConstraint("cars", {
      fields: ["car_model_id"],
      type: "foreign key",
      name: "car_model_association",
      references: {
        table: "car_models",
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
    queryInterface.removeConstraint("cars", {
      fields: ["car_model_id"],
      type: "foreign key",
      name: "car_model_association",
      references: {
        table: "car_models",
        field: "id",
      },
    });
  },
};
