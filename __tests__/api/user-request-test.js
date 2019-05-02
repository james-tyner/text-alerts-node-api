const frisby = require("frisby");
const { Joi } = frisby;

it("should create a new user request", async function(){
  return frisby.post("http://localhost:3000/api/user/requests/new", {
    fname:"James",
    lname:"Tyner",
    email:"fake@jamestyner.com"
  })
    .expect("status", 200)
    .expect("json", "email", "fake@jamestyner.com")
    .expect("jsonTypes", "id", Joi.number().required())
});

it("should return a 422 when a user request cannot be created", async function(){
  return frisby.post("http://localhost:3000/api/user/requests/new", {
    fname:123,
    lname:123,
    email:123
  })
    .expect("status", 422);
});

it("should return a list of user requests", async function(){
  return frisby.get("http://localhost:3000/api/user/requests")
    .expect("status", 200)
    .expect('jsonTypes', Joi.array().items({
      id: Joi.number(),
      email: Joi.string(),
    }));
});

// There is no way to force this into a 404 state. Even if there are no user requests, response 200 will be returned with content-type JSON and an empty array
