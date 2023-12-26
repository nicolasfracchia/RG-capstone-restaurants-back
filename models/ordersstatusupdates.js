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
    id_order: DataTypes.INTEGER,
    id_status_prev: DataTypes.INTEGER,
    id_status_new: DataTypes.INTEGER,
    datetime: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'OrdersStatusUpdates',
  });
  return OrdersStatusUpdates;
};