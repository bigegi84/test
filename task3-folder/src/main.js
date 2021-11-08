const express = require("express");
const http = require("./helper/http");
const { app, sequelize } = require("./state");

const run = () => {
  sequelize.sync();
  app.use(express.json());
  http();
  app.listen(1000, () => {
    console.log("app listen 1000");
  });
};
run();
