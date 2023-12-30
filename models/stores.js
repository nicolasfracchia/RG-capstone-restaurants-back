'use strict';

const { Model } = require('sequelize');

const { ProductsStores } = require('./productsstores');
const { UsersStores } = require('./usersstores');
const { RawMaterialsStoresStock } = require('./rawmaterialsstoresstock');
const { StoresInformation } = require('./storesinformation');

const { Products } = require('./products');
const { Users } = require('./users');
const { RawMaterials } = require('./rawmaterials');
const { InformationType } = require('./informationtype');
const { Orders } = require('./orders');

Stores.belongsToMany(Products, { through: ProductsStores });
Stores.belongsToMany(Users, { through: UsersStores });
Stores.belongsToMany(RawMaterials, { through: RawMaterialsStoresStock });
Stores.belongsToMany(InformationType, { through: StoresInformation });
Stores.balongsTo(Orders, {foreignKey: 'id_store'});

module.exports = (sequelize, DataTypes) => {
  class Stores extends Model {
    static associate(models) {}
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