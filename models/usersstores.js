'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UsersStores extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UsersStores.init({
    id_user: DataTypes.INTEGER,
    id_store: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UsersStores',
  });
  return UsersStores;
};