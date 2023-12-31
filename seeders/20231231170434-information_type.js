'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('informationtypes', [
      {name: 'Phone'},
      {name: 'Email'},
      {name: 'Address'},
      {name: 'Map'},
      {name: 'Notes'},
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('informationtypes', null, {});
  }
};
