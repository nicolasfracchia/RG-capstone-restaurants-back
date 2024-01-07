'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class OrdersStatus extends Model {
    static associate(models) {
      //OrdersStatus.belongsTo(models.Orders, {foreignKey: 'id_status'});
      OrdersStatus.hasMany(models.Orders, { foreignKey: 'id_status', as: 'status', targetKey: 'id' });
    }
  }
  OrdersStatus.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'OrdersStatus',
    timestamps: false
  });
  return OrdersStatus;
};