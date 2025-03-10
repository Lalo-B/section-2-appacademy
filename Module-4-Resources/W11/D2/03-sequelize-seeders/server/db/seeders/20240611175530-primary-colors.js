"use strict";
const { Color } = require("../models");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await Color.bulkCreate(
      [
        {
          name: "red",
        },
        {
          name: "blue",
        },
        {
          name: "yellow",
        },
      ],
      { validate: true }
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
    await queryInterface.bulkDelete(
      "Colors",
      [{ name: ["red", "yellow", "blue"] }],
      {}
    );
  },
};
