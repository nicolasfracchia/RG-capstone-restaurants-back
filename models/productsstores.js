'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ProductsStores extends Model {
    static associate(models) {
      models.Products.belongsToMany(models.Stores, {
        through: ProductsStores,
        foreignKey: 'id_product',
        otherKey: 'id_store'
      });
    }
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
    timestamps: false
  });
  return ProductsStores;
};