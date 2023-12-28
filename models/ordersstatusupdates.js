'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrdersStatusUpdates extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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