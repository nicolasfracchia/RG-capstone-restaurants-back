'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.addConstraint('usersinformations', {
      fields: ['id_type'],
      type: 'foreign key',
      name: 'fk_users_information_infotype',
      references: {
        table: 'informationtypes',
        field: 'id',
      },
      onDelete: 'cascade',
    });
  },
  
  async down (queryInterface, Sequelize) {
    return queryInterface.removeConstraint('usersinformations', 'fk_users_information_infotype');
  }
};
