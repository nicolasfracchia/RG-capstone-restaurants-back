'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    static associate(models) {
      Users.belongsToMany(models.Stores, { through: models.UsersStores });
      Users.belongsToMany(models.InformationType, { through: models.UsersInformation });
      Users.belongsTo(models.Orders, {foreignKey: 'id', targetKey: 'id_user'});
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