'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {
    static associate(models) {
      /*
      Orders.belongsToMany(models.Products, {through: models.OrdersProducts});
      Orders.hasMany(models.Users,{foreignKey: "id", targetKey: 'id_user'});
      Orders.hasMany(models.Stores,{foreignKey: "id", targetKey: 'id_store'});
      Orders.hasMany(models.OrdersStatus,{foreignKey: "id", targetKey: 'id__status'});
      Orders.hasMany(models.OrdersStatusUpdates, { foreignKey: 'id_order' });
      */
      Orders.belongsTo(models.Stores, { foreignKey: 'id_store', as: 'store', targetKey: 'id' });
      Orders.belongsTo(models.OrdersStatus, { foreignKey: 'id_status', as: 'status', targetKey: 'id' });
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
    timestamps: false
  });
  return Orders;
};