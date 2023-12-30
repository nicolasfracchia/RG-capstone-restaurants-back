'use strict';

const { Model } = require('sequelize');

const { Products } = require('./products');
const { Stores } = require('./stores');

Products.belongsToMany(Stores, {
  through: ProductsStores,
  foreignKey: 'id_product',
  otherKey: 'id_store'
});

module.exports = (sequelize, DataTypes) => {
  class ProductsStores extends Model {
    static associate(models) {}
  }
  ProductsStores.init({
    id_product: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_store: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'ProductsStores',
  });
  return ProductsStores;
};