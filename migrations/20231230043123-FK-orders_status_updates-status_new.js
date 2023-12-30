'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.addConstraint('ordersstatusupdates', {
      fields: ['id_status_new'],
      type: 'foreign key',
      name: 'fk_osu_status_new',
      references: {
        table: 'ordersstatuses',
        field: 'id',
      },
      onDelete: 'cascade',
    });
  },
  
  async down (queryInterface, Sequelize) {
    return queryInterface.removeConstraint('ordersstatusupdates', 'fk_osu_status_new');
  }
};
