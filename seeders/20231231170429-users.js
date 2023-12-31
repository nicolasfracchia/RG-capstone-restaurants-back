'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {id: 1, name: 'Admin',email: 'admin@mail.com'},
      {id: 2, name: 'User 1',email: 'user1@mail.com'},
      {id: 3, name: 'User 2',email: 'user2@mail.com'},
      {id: 4, name: 'User 3',email: 'user3@mail.com'},
      {id: 5, name: 'Customer 1',email: 'customer1@mail.com'},
      {id: 6, name: 'Customer 2',email: 'customer2@mail.com'},
      {id: 7, name: 'Customer 3',email: 'customer3@mail.com'},
      {id: 8, name: 'Customer 4',email: 'customer4@mail.com'},
      {id: 9, name: 'Customer 5',email: 'customer5@mail.com'},
      {id: 10, name: 'Customer 6',email: 'customer6@mail.com'},
      {id: 11, name: 'Customer 7',email: 'customer7@mail.com'},
      {id: 12, name: 'Customer 8',email: 'customer8@mail.com'},
      {id: 13, name: 'Customer 9',email: 'customer9@mail.com'},
      {id: 14, name: 'Customer 10',email: 'customer10@mail.com'},
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
