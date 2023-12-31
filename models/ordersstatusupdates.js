'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class OrdersStatusUpdates extends Model {
    static associate(models) {
      OrdersStatusUpdates.belongsTo(Orders, { foreignKey: 'id_order' });
      OrdersStatusUpdates.belongsTo(OrdersStatus, { foreignKey: 'id_status_prev' });
      OrdersStatusUpdates.belongsTo(OrdersStatus, { foreignKey: 'id_status_new' });
    }
  }
  OrdersStatusUpdates.init({
    id_order: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_status_prev: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_status_new: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    datetime: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    },
  }, {
    sequelize,
    modelName: 'OrdersStatusUpdates',
  });
  return OrdersStatusUpdates;
};