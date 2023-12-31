'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class UsersStores extends Model {
    static associate(models) {
      models.Users.belongsToMany(models.Stores, {
        through: UsersStores,
        foreignKey: 'id_user',
        otherKey: 'id_store'
      });
    }
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
    timestamps: false
  });
  return UsersStores;
};