const express = require("express");
module.exports = {
  app: express(),
  model: require("./model"),
  sequelize: require("./sequelize"),
};
