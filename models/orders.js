'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {
    static associate(models) {
      Orders.belongsToMany(Products, {through: OrdersProducts});
      Orders.hasMany(Users,{foreignKey: "id_user"});
      Orders.hasMany(Stores,{foreignKey: "id_store"});
      Orders.hasMany(OrdersStatus,{foreignKey: "id_status"});
      Orders.hasMany(OrdersStatusUpdates, { foreignKey: 'id_order' });
    }
  }
  Orders.init({
    id_user: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_store: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_status: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    discount: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    datetime: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    },
  }, {
    sequelize,
    modelName: 'Orders',
  });
  return Orders;
};