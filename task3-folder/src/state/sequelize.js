const { Sequelize } = require('sequelize');

// Option 1: Passing a connection URI
module.exports = new Sequelize('sqlite::memory:') 