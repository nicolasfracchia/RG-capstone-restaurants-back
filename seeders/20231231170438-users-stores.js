'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('usersstores', [
      {id: 1, id_user: 1, id_store: 1},
      {id: 2, id_user: 1, id_store: 2},
      {id: 3, id_user: 1, id_store: 3},
      {id: 4, id_user: 2, id_store: 1},
      {id: 5, id_user: 2, id_store: 2},
      {id: 6, id_user: 3, id_store: 1},
      {id: 7, id_user: 3, id_store: 2},
      {id: 8, id_user: 4, id_store: 3},
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('usersstores', null, {});
  }
};
