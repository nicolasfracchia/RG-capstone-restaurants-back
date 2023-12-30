'use strict';

const { Users } = require('./users');
const { Stores } = require('./stores');

Users.belongsToMany(Stores, {
  through: UsersStores,
  foreignKey: 'id_user',
  otherKey: 'id_store'
});

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class UsersStores extends Model {
    static associate(models) {}
  }
  UsersStores.init({
    id_user: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_store: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'UsersStores',
  });
  return UsersStores;
};