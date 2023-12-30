'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.addConstraint('usersstores', {
      fields: ['id_store'],
      type: 'foreign key',
      name: 'fk_users_stores_store',
      references: {
        table: 'stores',
        field: 'id',
      },
      onDelete: 'cascade',
    });
  },
  
  async down (queryInterface, Sequelize) {
    return queryInterface.removeConstraint('usersstores', 'fk_users_stores_store');
  }
};
