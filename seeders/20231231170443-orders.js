'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('orders', [
      {id: 1, id_user: 5, id_store: 1, id_status: 6, discount: 0, datetime: new Date('2024-01-03 07:14:21')},
      {id: 2, id_user: 6, id_store: 2, id_status: 6, discount: 5, datetime: new Date('2024-01-03 14:21:07')},
      {id: 3, id_user: 7, id_store: 3, id_status: 5, discount: 10, datetime: new Date('2024-01-03 21:07:14')},
      {id: 4, id_user: 8, id_store: 1, id_status: 6, discount: 5, datetime: new Date('2024-01-04 07:14:21')},
      {id: 5, id_user: 9, id_store: 2, id_status: 6, discount: 10, datetime: new Date('2024-01-04 14:21:07')},
      {id: 6, id_user: 10, id_store: 3, id_status: 5, discount: 0, datetime: new Date('2024-01-04 21:07:14')},
      {id: 7, id_user: 11, id_store: 1, id_status: 6, discount: 10, datetime: new Date('2024-01-05 07:14:21')},
      {id: 8, id_user: 12, id_store: 2, id_status: 6, discount: 0, datetime: new Date('2024-01-05 14:21:07')},
      {id: 9, id_user: 13, id_store: 3, id_status: 5, discount: 5, datetime: new Date('2024-01-05 21:07:14')},
      {id: 10, id_user: 14, id_store: 1, id_status: 6, discount: 0, datetime: new Date('2024-01-08 07:14:21')},
      {id: 11, id_user: 5, id_store: 2, id_status: 6, discount: 5, datetime: new Date('2024-01-08 14:21:07')},
      {id: 12, id_user: 6, id_store: 3, id_status: 5, discount: 10, datetime: new Date('2024-01-08 21:07:14')},
      {id: 13, id_user: 7, id_store: 1, id_status: 6, discount: 5, datetime: new Date('2024-01-09 07:14:21')},
      {id: 14, id_user: 8, id_store: 2, id_status: 6, discount: 10, datetime: new Date('2024-01-09 14:21:07')},
      {id: 15, id_user: 9, id_store: 3, id_status: 5, discount: 0, datetime: new Date('2024-01-09 21:07:14')},
      {id: 16, id_user: 10, id_store: 3, id_status: 3, discount: 10, datetime: new Date('2024-01-10 07:07:42')},
      {id: 17, id_user: 11, id_store: 3, id_status: 7, discount: 0, datetime: new Date('2024-01-10 07:14:35')},
      {id: 18, id_user: 12, id_store: 3, id_status: 4, discount: 5, datetime: new Date('2024-01-10 07:21:28')},
      {id: 19, id_user: 13, id_store: 3, id_status: 2, discount: 0, datetime: new Date('2024-01-10 07:28:21')},
      {id: 20, id_user: 14, id_store: 3, id_status: 2, discount: 5, datetime: new Date('2024-01-10 07:35:14')},
      {id: 21, id_user: 5, id_store: 3, id_status: 1, discount: 10, datetime: new Date('2024-01-10 07:42:07')},
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('orders', null, {});
  }
};
