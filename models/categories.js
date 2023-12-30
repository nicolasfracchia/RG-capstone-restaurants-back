'use strict';

const { Model } = require('sequelize');

const { ProductsCategories } = require('./productscategories');
const { Products } = require('./products');

Categories.belongsToMany(Products, { through: ProductsCategories });

module.exports = (sequelize, DataTypes) => {
  class Categories extends Model {
    static associate(models) {}
  }
  Categories.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Categories',
  });
  return Categories;
};