'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UsersInformation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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
  });
  return UsersInformation;
};