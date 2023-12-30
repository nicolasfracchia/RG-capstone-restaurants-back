'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.addConstraint('productscategories', {
      fields: ['id_category'],
      type: 'foreign key',
      name: 'fk_products_categories_category',
      references: {
        table: 'categories',
        field: 'id',
      },
      onDelete: 'cascade',
    });
  },
  
  async down (queryInterface, Sequelize) {
    return queryInterface.removeConstraint('productscategories', 'fk_products_categories_category');
  }
};
