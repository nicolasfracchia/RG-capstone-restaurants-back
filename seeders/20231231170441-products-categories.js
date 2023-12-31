'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('productscategories', [
      {id: 1, id_product: 1, id_category: 1},
      {id: 2, id_product: 1, id_category: 2},
      {id: 3, id_product: 2, id_category: 1},
      {id: 4, id_product: 2, id_category: 3},
      {id: 5, id_product: 3, id_category: 1},
      {id: 6, id_product: 3, id_category: 4},
      {id: 7, id_product: 4, id_category: 5},
      {id: 8, id_product: 4, id_category: 6},
      {id: 9, id_product: 5, id_category: 7},
      {id: 10, id_product: 5, id_category: 8},
      {id: 11, id_product: 6, id_category: 9},
      {id: 12, id_product: 6, id_category: 1},
      {id: 13, id_product: 7, id_category: 2},
      {id: 14, id_product: 7, id_category: 3},
      {id: 15, id_product: 7, id_category: 4},
      {id: 16, id_product: 8, id_category: 5},
      {id: 17, id_product: 8, id_category: 6},
      {id: 18, id_product: 9, id_category: 7},
      {id: 19, id_product: 9, id_category: 8},
      {id: 20, id_product: 10, id_category: 9},
      {id: 21, id_product: 10, id_category: 1},
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('productscategories', null, {});
  }
};
