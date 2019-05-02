const Sequelize = require('sequelize');
const User = require("../models/user");
const UserRequest = require("../models/userRequest");
const Subscriber = require("../models/subscriber");
const Message = require("../models/messageRecord");

if (process.env.CI = true){
  Sequelize.query(`CREATE TABLE message_history(
    id BIGINT(20) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    message VARCHAR(255) NOT NULL,
    mediaUrl VARCHAR(255),
    sender BIGINT(20) NOT NULL,
    created_at TIMESTAMP,
    updated_at TIMESTAMP
  );

  CREATE TABLE users(
    id BIGINT(20) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    fname VARCHAR(255) NOT NULL,
    lname VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    super TINYINT(1) NOT NULL DEFAULT 0,
    created_at TIMESTAMP,
    updated_at TIMESTAMP, deleted_at TIMESTAMP
  );

  CREATE TABLE subscribers(
    id BIGINT(20) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    phone BIGINT(20) UNSIGNED NOT NULL UNIQUE,
    created_at TIMESTAMP,
    updated_at TIMESTAMP
  );

  CREATE TABLE user_requests(
    id BIGINT(20) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    fname VARCHAR(255) NOT NULL,
    lname VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    created_at TIMESTAMP,
    updated_at TIMESTAMP
  );`)
}

// create fake user for testing
User.create({
  fname:"James",
  lname:"Tyner",
  email:"fake@jamestyner.com",
  password:"fake",
  super:false,
  phone:9991112345
}).catch(Sequelize.UniqueConstraintError, (error) => {
  console.log(error);
});

// create fake subscriber for testing. May not be necessary if the tests themselves post a fake subscriber and then delete it
Subscriber.create({
  name:"James Tyner",
  phone:9991112345
});

// create fake message for testing
Message.create({
  message:"This message is made solely for testing.",
  mediaUrl:"https://annenberg.usc.edu/sites/default/files/video_heros/ann_building_web.jpg",
  sender:1
}).catch(Sequelize.UniqueConstraintError, (error) => {
  console.log(error);
});
