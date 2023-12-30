'use strict';

const { Model } = require('sequelize');

const { Products } = require('./products');

ProductsImages.hasMany(Products,{
  foreignKey: "id_product"
});

module.exports = (sequelize, DataTypes) => {
  class ProductsImages extends Model {
    static associate(models) {}
  }
  ProductsImages.init({
    id_product: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'ProductsImages',
  });
  return ProductsImages;
};