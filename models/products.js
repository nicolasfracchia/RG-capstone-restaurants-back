'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    static associate(models) {
      Products.belongsToMany(Categories, { through: ProductsCategories });
      Products.belongsToMany(Stores, { through: ProductsStores });
      Products.belongsToMany(Orders, { through: OrdersProducts });
      Products.balongsTo(ProductsImages, {foreignKey: 'id_product'});
    }
  }
  Products.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cost: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Products',
  });
  return Products;
};