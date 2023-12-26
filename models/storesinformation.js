'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StoresInformation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  StoresInformation.init({
    id_store: DataTypes.INTEGER,
    id_type: DataTypes.INTEGER,
    information: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'StoresInformation',
  });
  return StoresInformation;
};