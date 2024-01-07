'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class UsersStores extends Model {
    static associate(models) {
      UsersStores.belongsTo(models.Users, { foreignKey: 'id_user' });
      UsersStores.belongsTo(models.Stores, { foreignKey: 'id_store' });
    }
  }
  UsersStores.init({}, {
    sequelize,
    modelName: 'UsersStores',
    timestamps: false
  });
  return UsersStores;
};
