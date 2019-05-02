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
    type:Sequelize.STRING,
    validate:{
      notEmpty:{
        msg:"That first name isn’t valid."
      }
    }
  },
  lname:{
    type:Sequelize.STRING,
    validate:{
      notEmpty:{
        msg:"That last name isn’t valid."
      }
    }
  },
  email:{
    type:Sequelize.STRING,
    unique:true,
    validate:{
      isEmail:{
        msg:"That isn’t a valid email address."
      }
    }
  }
}, {
  //need to match what Laravel is doing
  timestamps:true,
  createdAt:"created_at",
  updatedAt:"updated_at"
});
