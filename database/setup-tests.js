const Sequelize = require('sequelize');
const User = require("../models/user");
const UserRequest = require("../models/userRequest");
const Subscriber = require("../models/subscriber");
const Message = require("../models/messageRecord");

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
