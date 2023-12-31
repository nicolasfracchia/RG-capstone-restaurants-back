'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('productsstores', [
      {id: 1, id_product: 1, id_store: 1},
      {id: 2, id_product: 1, id_store: 2},
      {id: 3, id_product: 1, id_store: 3},
      {id: 4, id_product: 2, id_store: 1},
      {id: 5, id_product: 2, id_store: 2},
      {id: 6, id_product: 2, id_store: 3},
      {id: 7, id_product: 3, id_store: 1},
      {id: 8, id_product: 3, id_store: 2},
      {id: 9, id_product: 3, id_store: 3},
      {id: 10, id_product: 4, id_store: 1},
      {id: 11, id_product: 4, id_store: 2},
      {id: 12, id_product: 5, id_store: 1},
      {id: 13, id_product: 5, id_store: 2},
      {id: 14, id_product: 6, id_store: 1},
      {id: 15, id_product: 6, id_store: 2},
      {id: 16, id_product: 7, id_store: 1},
      {id: 17, id_product: 7, id_store: 2},
      {id: 18, id_product: 8, id_store: 1},
      {id: 19, id_product: 8, id_store: 2},
      {id: 20, id_product: 9, id_store: 3},
      {id: 21, id_product: 10, id_store: 3},
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('productsstores', null, {});
  }
};
