'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Stores extends Model {
    static associate(models) {
      Stores.belongsToMany(models.Users, { foreignKey: 'id_store', through: 'UsersStores', as: 'users' });
      Stores.hasMany(models.Orders, { foreignKey: 'id_store', as: 'orders' });
    }
  }
  Stores.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Stores',
    timestamps: false
  });
  return Stores;
};
