const dotenv = require("dotenv").config();
const Sequelize = require("sequelize");

module.exports = new Sequelize("text_alerts", process.env.DB_USER, process.env.DB_PASSWORD, {
  host:"localhost",
  port:3306,
  dialect:"mysql"
});
