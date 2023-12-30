'use strict';
const { Model } = require('sequelize');

const { UsersStores } = require('./usersstores');
const { UsersInformation } = require('./usersinformation');

const { Stores } = require('./stores');
const { InformationType } = require('./informationtype');
const { Orders } = require('./orders');

Users.belongsToMany(Stores, { through: UsersStores });
Users.belongsToMany(InformationType, { through: UsersInformation });
Users.balongsTo(Orders, {foreignKey: 'id_user'});

module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    static associate(models) {}
  }
  Users.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};