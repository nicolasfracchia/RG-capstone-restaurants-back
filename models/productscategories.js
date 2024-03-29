'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ProductsCategories extends Model {
    static associate(models) {
      models.Products.belongsToMany(models.Categories, {
        through: ProductsCategories,
        foreignKey: 'id_product',
        otherKey: 'id_category'
      });
    }
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
    timestamps: false
  });
  return ProductsCategories;
};