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

# CREATING APP MODELS AND RELATIONSHIPS
1. Create models and migrations with the command line using sequilize-cli:
```BASH
# Users
	npx sequelize-cli model:generate --name Users --attributes name:string,email:string
# Stores
	npx sequelize-cli model:generate --name Stores --attributes name:string
# Products
	npx sequelize-cli model:generate --name Products --attributes name:string,cost:float,price:float
# Categories
	npx sequelize-cli model:generate --name Categories --attributes name:string
# RawMaterials
	npx sequelize-cli model:generate --name RawMaterials --attributes name:string,min:float,max:number
# InformationType
	npx sequelize-cli model:generate --name InformationType --attributes name:string
# OrdersStatus
	npx sequelize-cli model:generate --name OrdersStatus --attributes name:string
# UsersInformation
	npx sequelize-cli model:generate --name UsersInformation --attributes id_user:integer,id_type:integer,information:string
# UsersStores
	npx sequelize-cli model:generate --name UsersStores --attributes id_user:integer,id_store:integer
# ProductsCategories
	npx sequelize-cli model:generate --name ProductsCategories --attributes id_product:integer,id_category:integer
# StoresInformation
	npx sequelize-cli model:generate --name StoresInformation --attributes id_store:integer,id_type:integer,information:string
# RawMaterialsStoresStock
	npx sequelize-cli model:generate --name RawMaterialsStoresStock --attributes id_rawmaterial:integer,id_store:integer,stock:float
# ProductsStores
	npx sequelize-cli model:generate --name ProductsStores --attributes id_product:integer,id_store:integer
# ProductsImages
	npx sequelize-cli model:generate --name ProductsImages --attributes id_product:integer,image:string
# Orders
	npx sequelize-cli model:generate --name Orders --attributes id_user:integer,id_store:integer,id_status:integer,discount:float,datetime:DATE
# OrdersProducts
	npx sequelize-cli model:generate --name OrdersProducts --attributes id_order:integer,id_product:integer,cost:float,price:float,quantity:float
# OrdersStatusUpdates
	npx sequelize-cli model:generate --name OrdersStatusUpdates --attributes id_order:integer,id_status_prev:integer,id_status_new:integer,datetime:DATE

```
2. Update models to define assosiationsbetweenmodels