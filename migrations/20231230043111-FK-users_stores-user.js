'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.addConstraint('usersstores', {
      fields: ['id_user'],
      type: 'foreign key',
      name: 'fk_users_stores_user',
      references: {
        table: 'users',
        field: 'id',
      },
      onDelete: 'cascade',
    });
  },
  
  async down (queryInterface, Sequelize) {
    return queryInterface.removeConstraint('usersstores', 'fk_users_stores_user');
  }
};
