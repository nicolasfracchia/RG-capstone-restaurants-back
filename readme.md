# SET-UP

### Initializing commands
```BASH
npm init
npm install express sequelize sequelize-cli
npx sequelize-cli init
```

### Index file
Created an index.js file with basic configuration
```JavaScript
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('WORKS!');
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
```

### Adding a .env file
1. Install dotenv to read the variables inside the poroject.
```BASH
npm install dotenv
```
2. Create a .env file in the project root.
3. Create a .env-example in the root of the project to upload to the git repository.
4. Add the .env file to the .gitignore.
5. Add node_modules to the .gitignore too.

### Create the database
MySQL database created manually using HeidiSQL

### Add dotenv in index.js
Placed at the top of the file to allow the proper usage of environment variables through the project: ``` require('dotenv').config(); ```

### Database configuration
1. Add file database.js at the root of the project.
2. Include sequelize and use the environment variables for connection:
```JavaScript
const Sequelize = require("sequelize");

const dbHost = process.env.DB_HOST;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbDatabase = process.env.DB_DATABASE;
const dbDialect = process.env.DB_DIALECT || 'mariadb';

const database = new Sequelize(dbDatabase, dbUser, dbPassword, {dialect:dbDialect,host:dbHost});

module.exports = database;
```
3. Include the database file in the index.js and test connection:
```JavaScript
...
const database = require('./database');
...
database.authenticate()
.then(function(){
    console.log('DB CONNECTED SUCCESSFULLY');
})
.catch(function(error){
    console.log('DATABASE CONNECTION ERROR:',error);
})
...
```
4. Install mariadb package for the database connection:
```BASH
npm install mariadb
```
5. Test the app: ``` node index ```

# CREATING APP MODELS
1. Create models and migrations with the command line using sequelize-cli:
```BASH
# Users
	sequelize-cli model:generate --name Users --attributes name:string,email:string
# Stores
	sequelize-cli model:generate --name Stores --attributes name:string
# Products
	sequelize-cli model:generate --name Products --attributes name:string,cost:float,price:float
# Categories
	sequelize-cli model:generate --name Categories --attributes name:string
# RawMaterials
	sequelize-cli model:generate --name RawMaterials --attributes name:string,min:float,max:float
# InformationType
	sequelize-cli model:generate --name InformationType --attributes name:string
# OrdersStatus
	sequelize-cli model:generate --name OrdersStatus --attributes name:string
# UsersInformation
	sequelize-cli model:generate --name UsersInformation --attributes id_user:integer,id_type:integer,information:string
# UsersStores
	sequelize-cli model:generate --name UsersStores --attributes id_user:integer,id_store:integer
# ProductsCategories
	sequelize-cli model:generate --name ProductsCategories --attributes id_product:integer,id_category:integer
# StoresInformation
	sequelize-cli model:generate --name StoresInformation --attributes id_store:integer,id_type:integer,information:string
# RawMaterialsStoresStock
	sequelize-cli model:generate --name RawMaterialsStoresStock --attributes id_rawmaterial:integer,id_store:integer,stock:float
# ProductsStores
	sequelize-cli model:generate --name ProductsStores --attributes id_product:integer,id_store:integer
# ProductsImages
	sequelize-cli model:generate --name ProductsImages --attributes id_product:integer,image:string
# Orders
	sequelize-cli model:generate --name Orders --attributes id_user:integer,id_store:integer,id_status:integer,discount:float,datetime:DATE
# OrdersProducts
	sequelize-cli model:generate --name OrdersProducts --attributes id_order:integer,id_product:integer,cost:float,price:float,quantity:float
# OrdersStatusUpdates
	sequelize-cli model:generate --name OrdersStatusUpdates --attributes id_order:integer,id_status_prev:integer,id_status_new:integer,datetime:DATE
```
2. Update models to set all the fields "NOT_NULL" and default value NOW for datetimes in orders and ordersstatusupdate.

# SETTING UP MODELS RELATIONSHIPS
1. models/categories.js
```JavaScript
...
const { ProductsCategories } = require('./productscategories');
const { Products } = require('./products');
Categories.belongsToMany(Products, { through: ProductsCategories });
...
```
2. models/informationtype.js
```JavaScript
...
const { StoresInformation } = require('./storesinformation');
const { UsersInformation } = require('./usersinformation');
const { Stores } = require('./stores');
const { Users } = require('./users');
InformationType.belongsToMany(Stores, { through: StoresInformation });
InformationType.belongsToMany(Users, { through: UsersInformation });
...
```
3. models/orders.js
```JavaScript
...
const { OrdersProducts } = require('./ordersproducts');
const { Products } = require('./ordersproducts');
const { Users } = require('./users');
const { Stores } = require('./stores');
const { OrdersStatus } = require('./ordersstatus');
const { OrdersStatusUpdates } = require('./ordersstatusupdates');
Orders.belongsToMany(Products, {through: OrdersProducts});
Orders.hasMany(Users,{foreignKey: "id_user"});
Orders.hasMany(Stores,{foreignKey: "id_store"});
Orders.hasMany(OrdersStatus,{foreignKey: "id_status"});
Orders.hasMany(OrdersStatusUpdates, { foreignKey: 'id_order' });
...
```
4. models/ordersproducts.js
```JavaScript
...
const { Orders } = require('./orders');
const { Products } = require('./products');
Orders.belongsToMany(Products, {through: OrdersProducts,foreignKey: 'id_order',otherKey: 'id_product'});
...
```
5. models/ordersstatus.js
```JavaScript
...
const { Orders } = require('./orders');
OrdersStatus.balongsTo(Orders, {foreignKey: 'id_status'});
...
```
6. models/ordersstatusupdates.js
```JavaScript
...
const { Orders } = require('./orders');
const { OrdersStatus } = require('./ordersstatus');
OrdersStatusUpdates.belongsTo(Orders, { foreignKey: 'id_order' });
OrdersStatusUpdates.belongsTo(OrdersStatus, { foreignKey: 'id_status_prev' });
OrdersStatusUpdates.belongsTo(OrdersStatus, { foreignKey: 'id_status_new' });
...
```
7. models/products.js
```JavaScript
...
const { ProductsCategories } = require('./productscategories');
const { ProductsStores } = require('./productsstores');
const { OrdersProducts } = require('./ordersproducts');
const { Categories } = require('categories');
const { Stores } = require('./stores');
const { Orders } = require('./orders');
const { ProductsImages } = require('./productsimages');
Products.belongsToMany(Categories, { through: ProductsCategories });
Products.belongsToMany(Stores, { through: ProductsStores });
Products.belongsToMany(Orders, { through: OrdersProducts });
Products.balongsTo(ProductsImages, {foreignKey: 'id_product'});
...
```
8. models/productscategories.js
```JavaScript
...
const { Products } = require('./products');
const { Categories } = require('./categories');
Products.belongsToMany(Categories, {through: ProductsCategories,foreignKey: 'id_product',otherKey: 'id_category'});
...
```
9. models/productsimages.js
```JavaScript
...
const { Products } = require('./products');
ProductsImages.hasMany(Products,{foreignKey: "id_product"});
...
```
10. models/productsstores.js
```JavaScript
...
const { Products } = require('./products');
const { Stores } = require('./stores');
Products.belongsToMany(Stores, {through: ProductsStores,foreignKey: 'id_product',otherKey: 'id_store'});
...
```
11. models/rawmaterials.js
```JavaScript
...
const { RawMaterialsStoresStock } = require('./rawmaterialsstoresstock');
const { Stores } = require('./stores');
RawMaterials.belongsToMany(Stores, {through: RawMaterialsStoresStock});
...
```
12. models/rawmaterialsstoresstock.js
```JavaScript
...
const { RawMaterials } = require('./rawmaterials');
const { Stores } = require('./stores');
RawMaterials.belongsToMany(Stores, {through: RawMaterialsStoresStock,foreignKey: 'id_rawmaterial',otherKey: 'id_store'});
...
```
13. models/stores.js
```JavaScript
...
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
...
```
14. models/storesinformation.js
```JavaScript
...
const { Stores } = require('./stores');
const { InformationType } = require('./informationtype');
Stores.belongsToMany(InformationType, {through: StoresInformation,foreignKey: 'id_store',otherKey: 'id_type'});
...
```
15. models/users.js
```JavaScript
...
const { UsersStores } = require('./usersstores');
const { UsersInformation } = require('./usersinformation');
const { Stores } = require('./stores');
const { InformationType } = require('./informationtype');
const { Orders } = require('./orders');
Users.belongsToMany(Stores, { through: UsersStores });
Users.belongsToMany(InformationType, { through: UsersInformation });
Users.balongsTo(Orders, {foreignKey: 'id_user'});
...
```
16. models/usersinformation.js
```JavaScript
...
const { Users } = require('./users');
const { InformationType } = require('./informationtype');
Users.belongsToMany(InformationType, {through: UsersInformation,foreignKey: 'id_user',otherKey: 'id_type'});
...
```
17. models/usersstores.js
```JavaScript
...
const { Users } = require('./users');
const { Stores } = require('./stores');
Users.belongsToMany(Stores, {through: UsersStores,foreignKey: 'id_user',otherKey: 'id_store'});
...
```

# MIGRATIONS
1. Update migrations generated with the models to remove timestamps (createdAt and updatedAt).
2. Set the fields "NOT_NULL" and default value to "CURRENT_TIMESTAMP" on orders.datetime and ordersstatusupdates.datetime.
3. Generate migrations to set the foreign keys according to the model's relationships:
```BASH
# Users Information
sequelize-cli migration:generate --name FK-users_information-user
sequelize-cli migration:generate --name FK-users_information-infotype
# Users Stores
sequelize-cli migration:generate --name FK-users_stores-user
sequelize-cli migration:generate --name FK-users_stores-store
# Raw Materials Stores Store
sequelize-cli migration:generate --name FK-raw_material_stores_store-raw_material
sequelize-cli migration:generate --name FK-raw_material_stores_store-store
# Products Images
sequelize-cli migration:generate --name FK-products_images-product
# Orders
sequelize-cli migration:generate --name FK-orders-user
sequelize-cli migration:generate --name FK-orders-store
sequelize-cli migration:generate --name FK-orders-status
# Products Stores
sequelize-cli migration:generate --name FK-products_stores-product
sequelize-cli migration:generate --name FK-products_stores-store
# Orders Products
sequelize-cli migration:generate --name FK-orders_products-order
sequelize-cli migration:generate --name FK-orders_products-product
# Orders Status Updates
sequelize-cli migration:generate --name FK-orders_status_updates-order
sequelize-cli migration:generate --name FK-orders_status_updates-status_prev
sequelize-cli migration:generate --name FK-orders_status_updates-status_new
# Orders Information
sequelize-cli migration:generate --name FK-orders_information-store
sequelize-cli migration:generate --name FK-orders_information-type
# Products Categories
sequelize-cli migration:generate --name FK-products_categories-product
sequelize-cli migration:generate --name FK-products_categories-category
```
4. Create functions to set up every foreign key:
```JavaScript
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.addConstraint('TABLE_NAME', {
      fields: ['FOREIGN_KEY_FIELD'],
      type: 'foreign key',
      name: 'FOREIGN_KEY_NAME',
      references: {
        table: 'REFERENCED_TABLE',
        field: 'REFERENCED_TABLE_PRIMARY_KEY',
      },
      onDelete: 'cascade',
    });
  },
  
  async down (queryInterface, Sequelize) {
    return queryInterface.removeConstraint('TABLE_NAME', 'FOREIGN_KEY_NAME');
  }
};
```
5. Change the file "config/config.json" to "config/config.js" to allow using the environment variables.
6. Set the variables for the Sequelize CLI:
```JavaScript
require('dotenv').config();

module.exports = {
  "development": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_DATABASE,
    "host": process.env.DB_HOST,
    "dialect": process.env.DB_DIALECT,
  }
};
```
7. Create the file ".sequelizerc.js" at the root of the project to set the path to the new config file for the Sequelize CLI:
```JavaScript
module.exports = {
  config: "config/config.js"
};
```
8. Run migrations ``` sequelize-cli db:migrate ```