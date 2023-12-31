'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('rawmaterialsstoresstocks', [
      {id: 1, id_rawmaterial: 1, id_store: 1, stock: 10},
      {id: 2, id_rawmaterial: 1, id_store: 2, stock: 12},
      {id: 3, id_rawmaterial: 2, id_store: 1, stock: 14},
      {id: 4, id_rawmaterial: 2, id_store: 2, stock: 16},
      {id: 5, id_rawmaterial: 3, id_store: 1, stock: 18},
      {id: 6, id_rawmaterial: 3, id_store: 2, stock: 20},
      {id: 7, id_rawmaterial: 4, id_store: 1, stock: 10},
      {id: 8, id_rawmaterial: 4, id_store: 2, stock: 12},
      {id: 9, id_rawmaterial: 5, id_store: 1, stock: 14},
      {id: 10, id_rawmaterial: 5, id_store: 2, stock: 16},
      {id: 11, id_rawmaterial: 6, id_store: 1, stock: 18},
      {id: 12, id_rawmaterial: 6, id_store: 2, stock: 20},
      {id: 13, id_rawmaterial: 7, id_store: 1, stock: 10},
      {id: 14, id_rawmaterial: 7, id_store: 2, stock: 12},
      {id: 15, id_rawmaterial: 8, id_store: 1, stock: 14},
      {id: 16, id_rawmaterial: 8, id_store: 2, stock: 16},
      {id: 17, id_rawmaterial: 9, id_store: 1, stock: 18},
      {id: 18, id_rawmaterial: 9, id_store: 2, stock: 20},
      {id: 19, id_rawmaterial: 10, id_store: 1, stock: 10},
      {id: 20, id_rawmaterial: 10, id_store: 2, stock: 12},
      {id: 21, id_rawmaterial: 10, id_store: 3, stock: 14},
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('rawmaterialsstoresstocks', null, {});
  }
};
