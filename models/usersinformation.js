'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class UsersInformation extends Model {
    static associate(models) {
      models.Users.belongsToMany(models.InformationType, {
        through: UsersInformation,
        foreignKey: 'id_user',
        otherKey: 'id_type'
      });
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