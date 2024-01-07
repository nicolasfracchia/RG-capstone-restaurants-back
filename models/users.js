'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    static associate(models) {
      Users.belongsToMany(models.Stores, { foreignKey: 'id_user', through: 'UsersStores', as: 'stores' });
      Users.hasMany(models.Orders, { foreignKey: 'id_user', as: 'orders' });
      Users.hasMany(models.UsersInformation, { foreignKey: 'id_user', as: 'userInformation' });
    }
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
    timestamps: false
  });
  return Users;
};
