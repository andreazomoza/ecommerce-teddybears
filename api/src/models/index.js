const fs = require('fs');
const path = require('path');
const db = require('../db.js');

const basename = path.basename(__filename);
const models = {};

models.conn = db();

fs.readdirSync(__dirname)
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    const model = models.conn.import(path.join(__dirname, file));
    const name = file.split(".")[0];
    models[name] = model;
  });


const {
  Product, Cat
} = models;

// Add model relationships here
//Product.belongsTo(Cat, {foreignKey: 'catprod'});


//Cat.hasMany(Product,{foreignKey:'catprod'});

//Product.belongsToMany(ProductCat, { through: "id" });
//ProductCat.belongsToMany(Category, { through: "idproductcat" });


module.exports = models;
