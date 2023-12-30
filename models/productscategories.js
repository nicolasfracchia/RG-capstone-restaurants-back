'use strict';

const { Model } = require('sequelize');

const { Products } = require('./products');
const { Categories } = require('./categories');

Products.belongsToMany(Categories, {
  through: ProductsCategories,
  foreignKey: 'id_product',
  otherKey: 'id_category'
});

module.exports = (sequelize, DataTypes) => {
  class ProductsCategories extends Model {
    static associate(models) {}
  }
  ProductsCategories.init({
    id_product: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_category: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'ProductsCategories',
  });
  return ProductsCategories;
};