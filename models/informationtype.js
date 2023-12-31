'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class InformationType extends Model {
    static associate(models) {
      InformationType.belongsToMany(Stores, { through: StoresInformation });
      InformationType.belongsToMany(Users, { through: UsersInformation });
    }
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