'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductsStores extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ProductsStores.init({
    id_product: DataTypes.INTEGER,
    id_store: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ProductsStores',
  });
  return ProductsStores;
};