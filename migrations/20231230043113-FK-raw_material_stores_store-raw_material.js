'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.addConstraint('rawmaterialsstoresstocks', {
      fields: ['id_rawmaterial'],
      type: 'foreign key',
      name: 'fk_rmss_raw_material',
      references: {
        table: 'rawmaterials',
        field: 'id',
      },
      onDelete: 'cascade',
    });
  },
  
  async down (queryInterface, Sequelize) {
    return queryInterface.removeConstraint('rawmaterialsstoresstocks', 'fk_rmss_raw_material');
  }
};
