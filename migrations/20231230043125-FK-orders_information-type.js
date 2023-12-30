'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.addConstraint('storesinformations', {
      fields: ['id_type'],
      type: 'foreign key',
      name: 'fk_orders_information_type',
      references: {
        table: 'informationtypes',
        field: 'id',
      },
      onDelete: 'cascade',
    });
  },
  
  async down (queryInterface, Sequelize) {
    return queryInterface.removeConstraint('storesinformations', 'fk_orders_information_type');
  }
};
