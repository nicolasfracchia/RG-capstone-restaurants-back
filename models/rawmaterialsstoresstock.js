'use strict';
const { Model } = require('sequelize');

const { RawMaterials } = require('./rawmaterials');
const { Stores } = require('./stores');

RawMaterials.belongsToMany(Stores, {
  through: RawMaterialsStoresStock,
  foreignKey: 'id_rawmaterial',
  otherKey: 'id_store'
});

module.exports = (sequelize, DataTypes) => {
  class RawMaterialsStoresStock extends Model {
    static associate(models) {}
  }
  RawMaterialsStoresStock.init({
    id_rawmaterial: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_store: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    stock: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'RawMaterialsStoresStock',
  });
  return RawMaterialsStoresStock;
};