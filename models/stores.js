'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Stores extends Model {
    static associate(models) {
      Stores.belongsToMany(Products, { through: ProductsStores });
      Stores.belongsToMany(Users, { through: UsersStores });
      Stores.belongsToMany(RawMaterials, { through: RawMaterialsStoresStock });
      Stores.belongsToMany(InformationType, { through: StoresInformation });
      Stores.balongsTo(Orders, {foreignKey: 'id_store'});
    }
  }
  Stores.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Stores',
  });
  return Stores;
};