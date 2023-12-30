'use strict';

const { Model } = require('sequelize');

const { ProductsCategories } = require('./productscategories');
const { ProductsStores } = require('./productsstores');
const { OrdersProducts } = require('./ordersproducts');

const { Categories } = require('categories');
const { Stores } = require('./stores');
const { Orders } = require('./orders');
const { ProductsImages } = require('./productsimages');

Products.belongsToMany(Categories, { through: ProductsCategories });
Products.belongsToMany(Stores, { through: ProductsStores });
Products.belongsToMany(Orders, { through: OrdersProducts });
Products.balongsTo(ProductsImages, {foreignKey: 'id_product'});

module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    static associate(models) {}
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
  });
  return Products;
};