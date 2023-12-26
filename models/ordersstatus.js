'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrdersStatus extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  OrdersStatus.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'OrdersStatus',
  });
  return OrdersStatus;
};