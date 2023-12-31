'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('categories', [
      {name: 'Category 1'},
      {name: 'Category 2'},
      {name: 'Category 3'},
      {name: 'Category 4'},
      {name: 'Category 5'},
      {name: 'Category 6'},
      {name: 'Category 7'},
      {name: 'Category 8'},
      {name: 'Category 9'},
      {name: 'Category 10'},
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('categories', null, {});
  }
};
