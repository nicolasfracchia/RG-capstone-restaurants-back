'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class RawMaterials extends Model {
    static associate(models) {
      RawMaterials.belongsToMany(models.Stores, {through: models.RawMaterialsStoresStock});
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
    timestamps: false
  });
  return RawMaterials;
};