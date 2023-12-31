'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Stores extends Model {
    static associate(models) {
      Stores.belongsToMany(models.Products, { through: models.ProductsStores });
      Stores.belongsToMany(models.Users, { through: models.UsersStores });
      Stores.belongsToMany(models.RawMaterials, { through: models.RawMaterialsStoresStock });
      Stores.belongsToMany(models.InformationType, { through: models.StoresInformation });
      Stores.belongsTo(models.Orders, {foreignKey: 'id_store'});
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
    timestamps: false
  });
  return Stores;
};