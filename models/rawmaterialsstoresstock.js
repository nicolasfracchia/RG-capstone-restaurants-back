'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RawMaterialsStoresStock extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  RawMaterialsStoresStock.init({
    id_rawmaterial: DataTypes.INTEGER,
    id_store: DataTypes.INTEGER,
    stock: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'RawMaterialsStoresStock',
  });
  return RawMaterialsStoresStock;
};