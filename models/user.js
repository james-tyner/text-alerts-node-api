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
  },
  password:{
    type:Sequelize.STRING
  },
  super:{
    type:Sequelize.BOOLEAN,
    validate:{
      isIn:{
        args:[[true, false]],
        msg:"That user level isn’t valid."
      }
    }
  },
  phone:{
    type:Sequelize.BIGINT(20).UNSIGNED,
    validate:{
      isNumeric:{
        msg:"Phone number must be a number."
      },
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
