'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('storesinformations', [
      {id_store: 1, id_type: 1, information: 'info phone 1'},
      {id_store: 1, id_type: 1, information: 'info phone 2'},
      {id_store: 1, id_type: 2, information: 'info email'},
      {id_store: 1, id_type: 3, information: 'info address'},
      {id_store: 1, id_type: 4, information: 'info location in map'},
      {id_store: 1, id_type: 5, information: 'info notes about how to find the place'},
      {id_store: 2, id_type: 1, information: 'info phone 1'},
      {id_store: 2, id_type: 1, information: 'info phone 2'},
      {id_store: 2, id_type: 2, information: 'info email'},
      {id_store: 2, id_type: 3, information: 'info address'},
      {id_store: 2, id_type: 4, information: 'info location in map'},
      {id_store: 2, id_type: 5, information: 'info notes about how to find the place'},
      {id_store: 3, id_type: 1, information: 'info phone'},
      {id_store: 3, id_type: 2, information: 'info email'},
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('storesinformations', null, {});
  }
};
