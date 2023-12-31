'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class OrdersProducts extends Model {
    static associate(models) {
      models.Orders.belongsToMany(models.Products, {
        through: OrdersProducts,
        foreignKey: 'id_order',
        otherKey: 'id_product'});
    }
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
    timestamps: false
  });
  return OrdersProducts;
};