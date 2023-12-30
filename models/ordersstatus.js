'use strict';

const { Model } = require('sequelize');

const { Orders } = require('./orders');

OrdersStatus.balongsTo(Orders, {foreignKey: 'id_status'});

module.exports = (sequelize, DataTypes) => {
  class OrdersStatus extends Model {
    static associate(models) {}
  }
  OrdersStatus.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'OrdersStatus',
  });
  return OrdersStatus;
};