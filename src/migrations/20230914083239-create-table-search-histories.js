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
    queryInterface.createTable("user_search_histories", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      userID: { allowNull: false, type: DataTypes.INTEGER },
      display: { allowNull: false, type: DataTypes.STRING },
      name: DataTypes.STRING,
      hs_num: DataTypes.INTEGER,
      street: DataTypes.STRING,
      address: DataTypes.STRING,
      city_id: DataTypes.INTEGER,
      city: DataTypes.STRING,
      district_id: DataTypes.INTEGER,
      ward_id: DataTypes.INTEGER,
      ward: DataTypes.STRING,
      district: DataTypes.STRING,
      lat: { allowNull: false, type: DataTypes.DOUBLE },
      lng: { allowNull: false, type: DataTypes.DOUBLE },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
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
    queryInterface.dropTable("user_search_histories");
  },
};
