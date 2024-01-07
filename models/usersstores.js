'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class UsersStores extends Model {
    static associate(models) {
      UsersStores.belongsTo(models.Stores, { foreignKey: 'id_store', as: 'store', targetKey: 'id' });
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