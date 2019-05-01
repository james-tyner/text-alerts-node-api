const express = require("express");
const bodyParser = require("body-parser");

const Sequelize = require('sequelize'); // we need this for some things we've done below
const User = require("./models/user");
const UserRequest = require("./models/userRequest");
const Subscriber = require("./models/subscriber");
const Message = require("./models/messageRecord");

const app = express();
app.use(bodyParser.json());


// Define relationship
Message.belongsTo(User, {
  foreignKey:"sender"
});

// Subscribe to alerts
app.post("/api/subscribe", function(request, response){
  Subscriber.create({
    name:request.body.name,
    phone:request.body.phone
  }).then(function(createdSubscriber){
    response.json(createdSubscriber)
  }, function(errorResponse){
    response.status(422).json({
      errors:errorResponse.errors.map(function(error){
        return {
          attribute:error.path,
          message:error.message
        };
      })
    });
  });
});

// Unsubscribe from alerts
app.delete("/api/subscribe", function(request, response){
  Subscriber.findOne({where:{phone:request.body.phone}}).then(function(foundSubscriber){
    if (foundSubscriber) {
      return foundSubscriber.destroy();
    } else {
      return Promise.reject();
    }
  }).then(function(){ // if subscriber deleted
    response.status(204).send();
  }, function(){ // if promise rejected
    response.status(404).send();
  })
});

// Get the last alert that was sent
app.get("/api/alerts", function(request, response){
  Message.findOne({ order: [[ 'created_at', 'DESC' ]], include:[{model:User}] })
  .then(function(foundMessage){
    if(foundMessage){
      response.json(foundMessage);
    } else {
      response.status(404).send();
    }
  });
});

// Request a new user account
app.post("/api/user/requests/new", function(request, response){
  UserRequest.create({
    fname:request.body.fname,
    lname:request.body.lname,
    email:request.body.email
  }).then(function(newUserRequest){
    response.json(newUserRequest)
  }, function(errorResponse){
    response.status(422).json({
      errors:errorResponse.errors.map(function(error){
        return {
          attribute:error.path,
          message:error.message
        };
      })
    });
  });
});

// Get a list of pending user requests
app.get("/api/user/requests", function(request, response){
  UserRequest.findAll().then(function(allRequests){
    if(allRequests && allRequests.length > 0){
      response.json(allRequests);
    } else {
      response.status(404).send();
    }
  })
});

// Update user's phone number
app.patch("/api/user/phone", function(request, response){
  User.findOne({where:{email:request.body.email}})
  .then(function(thisUser){
    if(thisUser){
      thisUser.phone = request.body.phone;
      thisUser.save({fields: ['phone']})
      .then(() => {
        response.json(thisUser);
      }, errorResponse => {
        response.status(422).json({
          errors:errorResponse.errors.map(function(error){
            return {
              attribute:error.path,
              message:error.message
            }
          })
        });
      });
    } else {
      response.status(404).send();
    }
  })
});

app.listen(3000);
