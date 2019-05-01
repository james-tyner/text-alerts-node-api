const sequelize = require('./../database/sequelize');
const Sequelize = require('sequelize');

module.exports = sequelize.define("subscriber", {
  id: {
    field:"id",
    type:Sequelize.BIGINT(20).UNSIGNED,
    autoIncrement:true,
    primaryKey: true
  },
  name: {
    type:Sequelize.STRING
  },
  phone:{
    type:Sequelize.BIGINT(20).UNSIGNED,
    unique:true,
    validate:{
      isNumeric:true,
      len:{
        args:10,
        msg:"Phone number must be from the US or Canada and exactly 10 digits."
      }
    }
  }
}, {
  //need to match what Laravel is doing
  timestamps:true,
  createdAt:"created_at",
  updatedAt:"updated_at"
});
