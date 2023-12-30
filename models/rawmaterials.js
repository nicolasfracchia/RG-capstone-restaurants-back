'use strict';

const { Model } = require('sequelize');


const { RawMaterialsStoresStock } = require('./rawmaterialsstoresstock');
const { Stores } = require('./stores');

RawMaterials.belongsToMany(Stores, {through: RawMaterialsStoresStock});

module.exports = (sequelize, DataTypes) => {
  class RawMaterials extends Model {
    static associate(models) {}
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