'use strict';

const { Model } = require('sequelize');

const { Stores } = require('./stores');
const { InformationType } = require('./informationtype');

Stores.belongsToMany(InformationType, {
  through: StoresInformation,
  foreignKey: 'id_store',
  otherKey: 'id_type'
});

module.exports = (sequelize, DataTypes) => {
  class StoresInformation extends Model {
    static associate(models) {}
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
  });
  return StoresInformation;
};