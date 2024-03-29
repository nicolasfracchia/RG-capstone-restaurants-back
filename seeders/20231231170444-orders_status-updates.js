'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('ordersstatusupdates', [
      {id: 1, id_order: 1, id_status_prev: 1, id_status_new: 1, datetime: new Date('2024-01-03 07:14:21')},
      {id: 2, id_order: 1, id_status_prev: 1, id_status_new: 2, datetime: new Date('2024-01-03 07:14:28')},
      {id: 3, id_order: 1, id_status_prev: 2, id_status_new: 3, datetime: new Date('2024-01-03 07:21:21')},
      {id: 4, id_order: 1, id_status_prev: 3, id_status_new: 6, datetime: new Date('2024-01-03 07:28:21')},
      {id: 5, id_order: 2, id_status_prev: 1, id_status_new: 1, datetime: new Date('2024-01-03 14:21:21')},
      {id: 6, id_order: 2, id_status_prev: 1, id_status_new: 2, datetime: new Date('2024-01-03 14:28:28')},
      {id: 7, id_order: 2, id_status_prev: 2, id_status_new: 3, datetime: new Date('2024-01-03 14:35:21')},
      {id: 8, id_order: 2, id_status_prev: 3, id_status_new: 6, datetime: new Date('2024-01-03 14:42:21')},
      {id: 9, id_order: 3, id_status_prev: 1, id_status_new: 1, datetime: new Date('2024-01-03 21:07:14')},
      {id: 10, id_order: 3, id_status_prev: 1, id_status_new: 2, datetime: new Date('2024-01-03 21:14:28')},
      {id: 11, id_order: 3, id_status_prev: 2, id_status_new: 3, datetime: new Date('2024-01-03 21:21:21')},
      {id: 12, id_order: 3, id_status_prev: 3, id_status_new: 5, datetime: new Date('2024-01-03 21:28:21')},
      {id: 13, id_order: 4, id_status_prev: 1, id_status_new: 1, datetime: new Date('2024-01-04 07:14:21')},
      {id: 14, id_order: 4, id_status_prev: 1, id_status_new: 2, datetime: new Date('2024-01-04 07:14:28')},
      {id: 15, id_order: 4, id_status_prev: 2, id_status_new: 3, datetime: new Date('2024-01-04 07:21:21')},
      {id: 16, id_order: 4, id_status_prev: 3, id_status_new: 6, datetime: new Date('2024-01-04 07:28:21')},
      {id: 17, id_order: 5, id_status_prev: 1, id_status_new: 1, datetime: new Date('2024-01-04 14:21:21')},
      {id: 18, id_order: 5, id_status_prev: 1, id_status_new: 2, datetime: new Date('2024-01-04 14:28:28')},
      {id: 19, id_order: 5, id_status_prev: 2, id_status_new: 3, datetime: new Date('2024-01-04 14:35:21')},
      {id: 20, id_order: 5, id_status_prev: 3, id_status_new: 6, datetime: new Date('2024-01-04 14:42:21')},
      {id: 21, id_order: 6, id_status_prev: 1, id_status_new: 1, datetime: new Date('2024-01-04 21:07:14')},
      {id: 22, id_order: 6, id_status_prev: 1, id_status_new: 2, datetime: new Date('2024-01-04 21:14:28')},
      {id: 23, id_order: 6, id_status_prev: 2, id_status_new: 3, datetime: new Date('2024-01-04 21:21:21')},
      {id: 24, id_order: 6, id_status_prev: 3, id_status_new: 5, datetime: new Date('2024-01-04 21:28:21')},
      {id: 25, id_order: 7, id_status_prev: 1, id_status_new: 1, datetime: new Date('2024-01-05 07:14:21')},
      {id: 26, id_order: 7, id_status_prev: 1, id_status_new: 2, datetime: new Date('2024-01-05 07:14:28')},
      {id: 27, id_order: 7, id_status_prev: 2, id_status_new: 3, datetime: new Date('2024-01-05 07:21:21')},
      {id: 28, id_order: 7, id_status_prev: 3, id_status_new: 6, datetime: new Date('2024-01-05 07:28:21')},
      {id: 29, id_order: 8, id_status_prev: 1, id_status_new: 1, datetime: new Date('2024-01-05 14:21:21')},
      {id: 30, id_order: 8, id_status_prev: 1, id_status_new: 2, datetime: new Date('2024-01-05 14:28:28')},
      {id: 31, id_order: 8, id_status_prev: 2, id_status_new: 3, datetime: new Date('2024-01-05 14:35:21')},
      {id: 32, id_order: 8, id_status_prev: 3, id_status_new: 6, datetime: new Date('2024-01-05 14:42:21')},
      {id: 33, id_order: 9, id_status_prev: 1, id_status_new: 1, datetime: new Date('2024-01-05 21:07:14')},
      {id: 34, id_order: 9, id_status_prev: 1, id_status_new: 2, datetime: new Date('2024-01-05 21:14:28')},
      {id: 35, id_order: 9, id_status_prev: 2, id_status_new: 3, datetime: new Date('2024-01-05 21:21:21')},
      {id: 36, id_order: 9, id_status_prev: 3, id_status_new: 5, datetime: new Date('2024-01-05 21:28:21')},
      {id: 37, id_order: 10, id_status_prev: 1, id_status_new: 1, datetime: new Date('2024-01-08 07:14:21')},
      {id: 38, id_order: 10, id_status_prev: 1, id_status_new: 2, datetime: new Date('2024-01-08 07:14:28')},
      {id: 39, id_order: 10, id_status_prev: 2, id_status_new: 3, datetime: new Date('2024-01-08 07:21:21')},
      {id: 40, id_order: 10, id_status_prev: 3, id_status_new: 6, datetime: new Date('2024-01-08 07:28:21')},
      {id: 41, id_order: 11, id_status_prev: 1, id_status_new: 1, datetime: new Date('2024-01-08 14:21:21')},
      {id: 42, id_order: 11, id_status_prev: 1, id_status_new: 2, datetime: new Date('2024-01-08 14:28:28')},
      {id: 43, id_order: 11, id_status_prev: 2, id_status_new: 3, datetime: new Date('2024-01-08 14:35:21')},
      {id: 44, id_order: 11, id_status_prev: 3, id_status_new: 6, datetime: new Date('2024-01-08 14:42:21')},
      {id: 45, id_order: 12, id_status_prev: 1, id_status_new: 1, datetime: new Date('2024-01-08 21:07:14')},
      {id: 46, id_order: 12, id_status_prev: 1, id_status_new: 2, datetime: new Date('2024-01-08 21:14:28')},
      {id: 47, id_order: 12, id_status_prev: 2, id_status_new: 3, datetime: new Date('2024-01-08 21:21:21')},
      {id: 48, id_order: 12, id_status_prev: 3, id_status_new: 5, datetime: new Date('2024-01-08 21:28:21')},
      {id: 49, id_order: 13, id_status_prev: 1, id_status_new: 1, datetime: new Date('2024-01-09 07:14:21')},
      {id: 50, id_order: 13, id_status_prev: 1, id_status_new: 2, datetime: new Date('2024-01-09 07:14:28')},
      {id: 51, id_order: 13, id_status_prev: 2, id_status_new: 3, datetime: new Date('2024-01-09 07:21:21')},
      {id: 52, id_order: 13, id_status_prev: 3, id_status_new: 6, datetime: new Date('2024-01-09 07:28:21')},
      {id: 53, id_order: 14, id_status_prev: 1, id_status_new: 1, datetime: new Date('2024-01-09 14:21:21')},
      {id: 54, id_order: 14, id_status_prev: 1, id_status_new: 2, datetime: new Date('2024-01-09 14:28:28')},
      {id: 55, id_order: 14, id_status_prev: 2, id_status_new: 3, datetime: new Date('2024-01-09 14:35:21')},
      {id: 56, id_order: 14, id_status_prev: 3, id_status_new: 6, datetime: new Date('2024-01-09 14:42:21')},
      {id: 57, id_order: 15, id_status_prev: 1, id_status_new: 1, datetime: new Date('2024-01-09 21:07:14')},
      {id: 58, id_order: 15, id_status_prev: 1, id_status_new: 2, datetime: new Date('2024-01-09 21:14:28')},
      {id: 59, id_order: 15, id_status_prev: 2, id_status_new: 3, datetime: new Date('2024-01-09 21:21:21')},
      {id: 60, id_order: 15, id_status_prev: 3, id_status_new: 5, datetime: new Date('2024-01-09 21:28:21')},
      {id: 61, id_order: 16, id_status_prev: 1, id_status_new: 1, datetime: new Date('2024-01-10 07:07:42')},
      {id: 62, id_order: 16, id_status_prev: 1, id_status_new: 2, datetime: new Date('2024-01-10 07:07:49')},
      {id: 63, id_order: 16, id_status_prev: 2, id_status_new: 3, datetime: new Date('2024-01-10 07:14:49')},
      {id: 64, id_order: 17, id_status_prev: 1, id_status_new: 1, datetime: new Date('2024-01-10 07:14:35')},
      {id: 65, id_order: 17, id_status_prev: 1, id_status_new: 2, datetime: new Date('2024-01-10 07:21:35')},
      {id: 66, id_order: 17, id_status_prev: 2, id_status_new: 7, datetime: new Date('2024-01-10 07:21:42')},
      {id: 67, id_order: 18, id_status_prev: 1, id_status_new: 1, datetime: new Date('2024-01-10 07:21:28')},
      {id: 68, id_order: 18, id_status_prev: 1, id_status_new: 4, datetime: new Date('2024-01-10 07:28:28')},
      {id: 69, id_order: 19, id_status_prev: 1, id_status_new: 1, datetime: new Date('2024-01-10 07:28:21')},
      {id: 70, id_order: 19, id_status_prev: 1, id_status_new: 2, datetime: new Date('2024-01-10 07:35:21')},
      {id: 71, id_order: 20, id_status_prev: 1, id_status_new: 1, datetime: new Date('2024-01-10 07:35:14')},
      {id: 72, id_order: 20, id_status_prev: 1, id_status_new: 2, datetime: new Date('2024-01-10 07:42:21')},
      {id: 73, id_order: 21, id_status_prev: 1, id_status_new: 1, datetime: new Date('2024-01-10 07:42:07')},
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('ordersstatusupdates', null, {});
  }
};
