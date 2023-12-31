'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('ordersproducts', [
      {id: 1, id_order: 1, id_product: 1, cost:11.05, price:21.15, quantity: 1},
      {id: 2, id_order: 1, id_product: 2, cost:12.05, price:22.15, quantity: 3},
      {id: 3, id_order: 1, id_product: 3, cost:13.05, price:23.15, quantity: 2},
      {id: 4, id_order: 2, id_product: 1, cost:11.05, price:21.15, quantity: 1},
      {id: 5, id_order: 3, id_product: 1, cost:11.05, price:21.15, quantity: 1},
      {id: 6, id_order: 4, id_product: 1, cost:11.05, price:21.15, quantity: 1},
      {id: 7, id_order: 5, id_product: 1, cost:11.05, price:21.15, quantity: 1},
      {id: 8, id_order: 6, id_product: 1, cost:11.05, price:21.15, quantity: 1},
      {id: 9, id_order: 7, id_product: 1, cost:11.05, price:21.15, quantity: 1},
      {id: 10, id_order: 8, id_product: 1, cost:11.05, price:21.15, quantity: 1},
      {id: 11, id_order: 9, id_product: 1, cost:11.05, price:21.15, quantity: 1},
      {id: 12, id_order: 10, id_product: 1, cost:11.05, price:21.15, quantity: 1},
      {id: 13, id_order: 11, id_product: 1, cost:11.05, price:21.15, quantity: 1},
      {id: 14, id_order: 12, id_product: 1, cost:11.05, price:21.15, quantity: 1},
      {id: 15, id_order: 13, id_product: 1, cost:11.05, price:21.15, quantity: 1},
      {id: 16, id_order: 14, id_product: 1, cost:11.05, price:21.15, quantity: 1},
      {id: 17, id_order: 15, id_product: 1, cost:11.05, price:21.15, quantity: 1},
      {id: 18, id_order: 16, id_product: 1, cost:11.05, price:21.15, quantity: 1},
      {id: 19, id_order: 17, id_product: 1, cost:11.05, price:21.15, quantity: 1},
      {id: 20, id_order: 18, id_product: 1, cost:11.05, price:21.15, quantity: 1},
      {id: 21, id_order: 19, id_product: 1, cost:11.05, price:21.15, quantity: 1},
      {id: 22, id_order: 20, id_product: 1, cost:11.05, price:21.15, quantity: 1},
      {id: 23, id_order: 21, id_product: 1, cost:11.05, price:21.15, quantity: 1},
      {id: 24, id_order: 21, id_product: 2, cost:12.05, price:22.15, quantity: 2},
      {id: 25, id_order: 21, id_product: 3, cost:13.05, price:23.15, quantity: 3},
      {id: 26, id_order: 21, id_product: 4, cost:14.05, price:24.15, quantity: 4},
      {id: 27, id_order: 21, id_product: 5, cost:15.05, price:25.15, quantity: 5},
      {id: 28, id_order: 21, id_product: 6, cost:16.05, price:26.15, quantity: 6},
      {id: 29, id_order: 21, id_product: 7, cost:17.05, price:27.15, quantity: 7},
      {id: 30, id_order: 21, id_product: 8, cost:18.05, price:28.15, quantity: 8},
      {id: 31, id_order: 21, id_product: 9, cost:19.05, price:29.15, quantity: 9},
      {id: 32, id_order: 21, id_product: 10, cost:20.05, price:30.15, quantity: 10},
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('ordersproducts', null, {});
  }
};
