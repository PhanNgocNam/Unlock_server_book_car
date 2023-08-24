"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    queryInterface.addConstraint("car_register_methods", {
      fields: ["car_id"],
      type: "foreign key",
      name: "car_register_method_association_car",
      references: {
        table: "cars",
        field: "id",
      },
    });

    queryInterface.addConstraint("car_register_methods", {
      fields: ["regis_id"],
      type: "foreign key",
      name: "car_register_method_association_regis",
      references: {
        table: "registration_methods",
        field: "id",
      },
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    queryInterface.removeConstraint(
      "car_register_methods",
      "car_register_method_association_regis"
    );
    queryInterface.removeConstraint(
      "car_register_methods",
      "car_register_method_association_car"
    );

    // console.log("pass");
  },
};
