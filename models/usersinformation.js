'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class UsersInformation extends Model {
    static associate(models) {
      UsersInformation.belongsTo(models.Users, { foreignKey: 'id_user', targetKey: 'id', as: 'userInfo' });
      UsersInformation.belongsTo(models.InformationType, { foreignKey: 'id_type', as: 'infoType', targetKey: 'id' });
    }
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
    timestamps: false
  });
  return UsersInformation;
};