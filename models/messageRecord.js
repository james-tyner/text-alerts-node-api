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
    type:Sequelize.STRING
  },
  mediaUrl:{
    type:Sequelize.STRING,
    validate:{
      isUrl:true
    }
  },
  sender:{
    type:Sequelize.BIGINT(20)
  }
}, {
  //need to match what Laravel is doing
  timestamps:true,
  createdAt:"created_at",
  updatedAt:"updated_at",
  freezeTableName:true,
  tableName:"message_history"
});
