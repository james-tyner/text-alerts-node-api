const User = require("../models/user");
const UserRequest = require("../models/userRequest");
const Subscriber = require("../models/subscriber");
const Message = require("../models/messageRecord");

// remove fake user you created
User.findAll({where:{email:"fake@jamestyner.com"}, paranoid:false}).then(fakeUsers => {
  if (fakeUsers){
    for (var user of fakeUsers){
      user.destroy({force:true})
    }
  }
});

// remove fake message you created
Message.findAll({where:{message:"This message is made solely for testing."}}).then(fakeMessages => {
  if(fakeMessages){
    for (var message of fakeMessages){
      message.destroy()
    }
  }
})

// remove user request that was created during user request test
UserRequest.findAll({where:{email:"fake@jamestyner.com"}}).then(fakeRequests => {
  if(fakeRequests){
    for (var request of fakeRequests){
      request.destroy()
    }
  }
})

// remove subscriber that was created during subscriber test (if the delete subscriber test didn’t already)
Subscriber.findAll({where:{phone:9991112345}}).then(fakeSubscribers => {
  if(fakeSubscribers){
    for (var subscriber of fakeSubscribers){
      subscriber.destroy()
    }
  }
})

Subscriber.findAll({where:{phone:1119992345}}).then(fakeSubscribers => {
  if(fakeSubscribers){
    for (var subscriber of fakeSubscribers){
      subscriber.destroy()
    }
  }
})
