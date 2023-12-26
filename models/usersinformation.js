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
    id_user: DataTypes.INTEGER,
    id_type: DataTypes.INTEGER,
    information: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'UsersInformation',
  });
  return UsersInformation;
};