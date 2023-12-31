'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('ordersstatuses', [
      {id: 1, name: 'Requested'},
      {id: 2, name: 'Confirmed'},
      {id: 3, name: 'In Progress'},
      {id: 4, name: 'Cancelled By Store'},
      {id: 5, name: 'Delivered'},
      {id: 6, name: 'Picked Up'},
      {id: 7, name: 'Cancelled By Customer'},
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('ordersstatuses', null, {});
  }
};
