'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ProductsImages extends Model {
    static associate(models) {
      ProductsImages.hasMany(models.Products,{
        foreignKey: "id_product"
      });
    }
  }
  ProductsImages.init({
    id_product: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'ProductsImages',
    timestamps: false
  });
  return ProductsImages;
};