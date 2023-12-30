'use strict';

const { Model } = require('sequelize');

const { StoresInformation } = require('./storesinformation');
const { UsersInformation } = require('./usersinformation');

const { Stores } = require('./stores');
const { Users } = require('./users');

InformationType.belongsToMany(Stores, { through: StoresInformation });
InformationType.belongsToMany(Users, { through: UsersInformation });

module.exports = (sequelize, DataTypes) => {
  class InformationType extends Model {
    static associate(models) {}
  }
  InformationType.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'InformationType',
  });
  return InformationType;
};