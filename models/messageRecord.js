const sequelize = require('./../database/sequelize');
const Sequelize = require('sequelize');

module.exports = sequelize.define("message_record", {
  id: {
    field:"id",
    type:Sequelize.BIGINT(20).UNSIGNED,
    autoIncrement:true,
    primaryKey: true
  },
  message: {
    type:Sequelize.STRING,
    validate:{
      notEmpty:{
        msg:"The alert must contain text."
      }
    }
  },
  mediaUrl:{
    type:Sequelize.STRING,
    validate:{
      isUrl:{
        msg:"The image must be a valid image URL."
      }
    }
  },
  sender:{
    type:Sequelize.BIGINT(20),
    validate:{
      isInt:{
        msg:"Sender must be an integer."
      }
    }
  }
}, {
  //need to match what Laravel is doing
  timestamps:true,
  createdAt:"created_at",
  updatedAt:"updated_at",
  freezeTableName:true,
  tableName:"message_history"
});
