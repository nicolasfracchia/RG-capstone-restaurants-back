'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.addConstraint('productsstores', {
      fields: ['id_product'],
      type: 'foreign key',
      name: 'fk_products_stores_product',
      references: {
        table: 'products',
        field: 'id',
      },
      onDelete: 'cascade',
    });
  },
  
  async down (queryInterface, Sequelize) {
    return queryInterface.removeConstraint('productsstores', 'fk_products_stores_product');
  }
};
