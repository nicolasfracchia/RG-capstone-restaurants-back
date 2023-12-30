'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.addConstraint('ordersproducts', {
      fields: ['id_product'],
      type: 'foreign key',
      name: 'fk_orders_products_product',
      references: {
        table: 'products',
        field: 'id',
      },
      onDelete: 'cascade',
    });
  },
  
  async down (queryInterface, Sequelize) {
    return queryInterface.removeConstraint('ordersproducts', 'fk_orders_products_product');
  }
};
