'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('stores', [
      {name:'Physical Store 1'},
      {name:'Physical Store 2'},
      {name:'Digital Store'},
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('stores', null, {});
  }
};
