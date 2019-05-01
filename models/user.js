const sequelize = require('./../database/sequelize');
const Sequelize = require('sequelize');

// btw... intentionally excluding password from the model so it never gets returned. Right now you never have a route that needs to set a password

module.exports = sequelize.define("user", {
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
  },
  super:{
    type:Sequelize.BOOLEAN
  },
  phone:{
    type:Sequelize.BIGINT(20).UNSIGNED,
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
  updatedAt:"updated_at",
  deletedAt:"deleted_at",
  paranoid:true
});
