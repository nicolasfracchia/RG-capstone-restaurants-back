'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class StoresInformation extends Model {
    static associate(models) {
      models.Stores.belongsToMany(models.InformationType, {
        through: StoresInformation,
        foreignKey: 'id_store',
        otherKey: 'id_type'
      });
    }
  }
  StoresInformation.init({
    id_store: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_type: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    information: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'StoresInformation',
    timestamps: false
  });
  return StoresInformation;
};