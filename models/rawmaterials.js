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
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    min: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    max: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'RawMaterials',
  });
  return RawMaterials;
};