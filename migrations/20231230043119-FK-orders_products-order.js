'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.addConstraint('ordersproducts', {
      fields: ['id_order'],
      type: 'foreign key',
      name: 'fk_orders_products_order',
      references: {
        table: 'orders',
        field: 'id',
      },
      onDelete: 'cascade',
    });
  },
  
  async down (queryInterface, Sequelize) {
    return queryInterface.removeConstraint('ordersproducts', 'fk_orders_products_order');
  }
};
