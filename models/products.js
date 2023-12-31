'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    static associate(models) {
      Products.belongsToMany(models.Categories, { through: models.ProductsCategories });
      Products.belongsToMany(models.Stores, { through: models.ProductsStores });
      Products.belongsToMany(models.Orders, { through: models.OrdersProducts });
      Products.belongsTo(models.ProductsImages, {foreignKey: 'id_product'});
    }
  }
  Products.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cost: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Products',
    timestamps: false
  });
  return Products;
};