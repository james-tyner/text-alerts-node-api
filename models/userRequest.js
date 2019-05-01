const sequelize = require('./../database/sequelize');
const Sequelize = require('sequelize');

module.exports = sequelize.define("user_request", {
  id: {
    field:"id",
    type:Sequelize.BIGINT(20).UNSIGNED,
    autoIncrement:true,
    primaryKey: true
  },
  fname: {
    type:Sequelize.STRING
  },
  lname:{
    type:Sequelize.STRING
  },
  email:{
    type:Sequelize.STRING,
    unique:true,
    validate:{
      isEmail:true
    }
  }
}, {
  //need to match what Laravel is doing
  timestamps:true,
  createdAt:"created_at",
  updatedAt:"updated_at"
});
