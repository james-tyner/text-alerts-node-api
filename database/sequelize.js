const dotenv = require("dotenv").config();
const Sequelize = require("sequelize");


if (process.env.ENVIRONMENT == "travis"){
  module.exports = new Sequelize("test", "testing", "testing", {
    host:"127.0.0.1",
    dialect:"mysql"
  });
} else {
  module.exports = new Sequelize("text_alerts", process.env.DB_USER, process.env.DB_PASSWORD, {
    host:"localhost",
    port:3306,
    dialect:"mysql"
  });
}
