const Sequelize = require('sequelize');

function db() {

  return new Sequelize(
    'dev1',
    'postgres',
    '1234', {
      host:'localhost',
      dialect:'postgres',
      //logging: false, // set to console.log to see the raw SQL queries
    //native: true, // lets Sequelize know we can use pg-native for ~30% more speed

  });
}

module.exports = db;
