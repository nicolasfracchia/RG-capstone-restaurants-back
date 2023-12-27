'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RawMaterials extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  RawMaterials.init({
    name: DataTypes.STRING,
    min: DataTypes.FLOAT,
    max: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'RawMaterials',
  });
  return RawMaterials;
};