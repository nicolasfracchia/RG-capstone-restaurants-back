'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class InformationType extends Model {
    static associate(models) {
      InformationType.belongsToMany(models.Stores, { through: models.StoresInformation });
      InformationType.belongsToMany(models.Users, { through: models.UsersInformation });
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
    timestamps: false
  });
  return InformationType;
};