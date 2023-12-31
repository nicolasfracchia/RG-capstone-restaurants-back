'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    static associate(models) {
      Users.belongsToMany(Stores, { through: UsersStores });
      Users.belongsToMany(InformationType, { through: UsersInformation });
      Users.balongsTo(Orders, {foreignKey: 'id_user'});
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
  });
  return Users;
};