'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('productsimages', [
      {id: 1, id_product: 1, image: 'http://yycpronto.com/public/media/images/products/veggie.jpg'},
      {id: 2, id_product: 1, image: 'http://yycpronto.com/public/media/images/products/steakp.jpg'},
      {id: 3, id_product: 1, image: 'http://yycpronto.com/public/media/images/products/greek.jpg'},
      {id: 4, id_product: 2, image: 'http://yycpronto.com/public/media/images/products/veggie.jpg'},
      {id: 5, id_product: 2, image: 'http://yycpronto.com/public/media/images/products/steakp.jpg'},
      {id: 6, id_product: 2, image: 'http://yycpronto.com/public/media/images/products/greek.jpg'},
      {id: 7, id_product: 3, image: 'http://yycpronto.com/public/media/images/products/veggie.jpg'},
      {id: 8, id_product: 4, image: 'http://yycpronto.com/public/media/images/products/veggie.jpg'},
      {id: 9, id_product: 5, image: 'http://yycpronto.com/public/media/images/products/veggie.jpg'},
      {id: 10, id_product: 6, image: 'http://yycpronto.com/public/media/images/products/veggie.jpg'},
      {id: 11, id_product: 7, image: 'http://yycpronto.com/public/media/images/products/veggie.jpg'},
      {id: 12, id_product: 8, image: 'http://yycpronto.com/public/media/images/products/veggie.jpg'},
      {id: 13, id_product: 9, image: 'http://yycpronto.com/public/media/images/products/veggie.jpg'},
      {id: 14, id_product: 9, image: 'http://yycpronto.com/public/media/images/products/steakp.jpg'},
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('productsimages', null, {});
  }
};
