'use strict';

const { Model } = require('sequelize');

const { Orders } = require('./orders');
const { Products } = require('./products');

Orders.belongsToMany(Products, {
  through: OrdersProducts,
  foreignKey: 'id_order',
  otherKey: 'id_product'
});

module.exports = (sequelize, DataTypes) => {
  class OrdersProducts extends Model {
    static associate(models) {}
  }
  OrdersProducts.init({
    id_order: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_product: {
      type: DataTypes.INTEGER,
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
    quantity: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'OrdersProducts',
  });
  return OrdersProducts;
};