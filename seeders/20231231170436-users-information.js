'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('usersinformations', [
      {id_user: 1, id_type: 1, information: 'info phone'},
      {id_user: 1, id_type: 2, information: 'info email'},
      {id_user: 2, id_type: 3, information: 'info address'},
      {id_user: 2, id_type: 1, information: 'info phone'},
      {id_user: 3, id_type: 2, information: 'info email'},
      {id_user: 3, id_type: 3, information: 'info address'},
      {id_user: 4, id_type: 1, information: 'info phone'},
      {id_user: 4, id_type: 2, information: 'info email'},
      {id_user: 5, id_type: 3, information: 'info address'},
      {id_user: 5, id_type: 1, information: 'info phone'},
      {id_user: 6, id_type: 2, information: 'info email'},
      {id_user: 6, id_type: 3, information: 'info address'},
      {id_user: 7, id_type: 1, information: 'info phone'},
      {id_user: 7, id_type: 2, information: 'info email'},
      {id_user: 8, id_type: 3, information: 'info address'},
      {id_user: 8, id_type: 1, information: 'info phone'},
      {id_user: 9, id_type: 2, information: 'info email'},
      {id_user: 9, id_type: 3, information: 'info address'},
      {id_user: 10, id_type: 1, information: 'info phone'},
      {id_user: 10, id_type: 2, information: 'info email'},
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('usersinformations', null, {});
  }
};
