'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.addConstraint('storesinformations', {
      fields: ['id_store'],
      type: 'foreign key',
      name: 'fk_orders_information_store',
      references: {
        table: 'stores',
        field: 'id',
      },
      onDelete: 'cascade',
    });
  },
  
  async down (queryInterface, Sequelize) {
    return queryInterface.removeConstraint('storesinformations', 'fk_orders_information_store');
  }
};
