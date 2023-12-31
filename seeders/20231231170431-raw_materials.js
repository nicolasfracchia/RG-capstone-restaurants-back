'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('rawmaterials', [
      {id: 1, name: 'Raw Material 1', min: 11, max: 21},
      {id: 2, name: 'Raw Material 2', min: 12, max: 22},
      {id: 3, name: 'Raw Material 3', min: 13, max: 23},
      {id: 4, name: 'Raw Material 4', min: 14, max: 24},
      {id: 5, name: 'Raw Material 5', min: 15, max: 25},
      {id: 6, name: 'Raw Material 6', min: 16, max: 26},
      {id: 7, name: 'Raw Material 7', min: 17, max: 27},
      {id: 8, name: 'Raw Material 8', min: 18, max: 28},
      {id: 9, name: 'Raw Material 9', min: 19, max: 29},
      {id: 10, name: 'Raw Material 10', min: 20, max: 30},
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('rawmaterials', null, {});
  }
};
