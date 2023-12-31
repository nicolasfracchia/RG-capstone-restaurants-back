'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Categories extends Model {
    static associate(models) {
      Categories.belongsToMany(models.Products, { through: models.ProductsCategories });
    }
  }
  Categories.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Categories',
    timestamps: false
  });
  return Categories;
};