'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrdersProducts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  OrdersProducts.init({
    id_order: DataTypes.INTEGER,
    id_product: DataTypes.INTEGER,
    cost: DataTypes.FLOAT,
    price: DataTypes.FLOAT,
    quantity: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'OrdersProducts',
  });
  return OrdersProducts;
};