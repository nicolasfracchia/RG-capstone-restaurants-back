'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('products', [
      {id: 1, name: 'Product 1',cost: 11.05,price: 21.15},
      {id: 2, name: 'Product 2',cost: 12.05,price: 22.15},
      {id: 3, name: 'Product 3',cost: 13.05,price: 23.15},
      {id: 4, name: 'Product 4',cost: 14.05,price: 24.15},
      {id: 5, name: 'Product 5',cost: 15.05,price: 25.15},
      {id: 6, name: 'Product 6',cost: 16.05,price: 26.15},
      {id: 7, name: 'Product 7',cost: 17.05,price: 27.15},
      {id: 8, name: 'Product 8',cost: 18.05,price: 28.15},
      {id: 9, name: 'Product 9',cost: 19.05,price: 29.15},
      {id: 10, name: 'Product 10',cost: 20.05,price: 30.15},
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('products', null, {});
  }
};
