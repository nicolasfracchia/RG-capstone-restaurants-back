'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Categories extends Model {
    static associate(models) {
      Categories.belongsToMany(Products, { through: ProductsCategories });
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
  });
  return Categories;
};