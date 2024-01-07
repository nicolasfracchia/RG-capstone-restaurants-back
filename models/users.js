'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    static associate(models) {
      Users.belongsToMany(models.Stores, { through: models.UsersStores });
      Users.belongsTo(models.Orders, { foreignKey: 'id', targetKey: 'id_user' });
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