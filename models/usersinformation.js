'use strict';

const { Model } = require('sequelize');

const { Users } = require('./users');
const { InformationType } = require('./informationtype');

Users.belongsToMany(InformationType, {
  through: UsersInformation,
  foreignKey: 'id_user',
  otherKey: 'id_type'
});

module.exports = (sequelize, DataTypes) => {
  class UsersInformation extends Model {
    static associate(models) {}
  }
  UsersInformation.init({
    id_user: {
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
    }
  }, {
    sequelize,
    modelName: 'UsersInformation',
  });
  return UsersInformation;
};