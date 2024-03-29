'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class RawMaterialsStoresStock extends Model {
    static associate(models) {
      models.RawMaterials.belongsToMany(models.Stores, {
        through: RawMaterialsStoresStock,
        foreignKey: 'id_rawmaterial',
        otherKey: 'id_store'
      });
    }
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
    timestamps: false
  });
  return RawMaterialsStoresStock;
};