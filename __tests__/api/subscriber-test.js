const frisby = require("frisby");

const { Joi } = frisby;


it("should create a new subscriber", async function(){
  return frisby.post("http://localhost:3000/api/subscribe", {
    name:"James Tyner",
    phone:1119992345
  })
    .expect("status", 200)
    .expect("json", "phone", 1119992345)
    .expect("jsonTypes", "id", Joi.number().required())
});

it("should return 422 when a new subscriber can’t be created", async function(){
  return frisby.post("http://localhost:3000/api/subscribe", {
    name:"James Tyner",
    phone:"fail"
  })
    .expect("status", 422)
})


it("should return 204 when a subscriber is deleted", async function(){
  return frisby
  .del("http://localhost:3000/api/subscribe/9991112345")
  .expect("status", 204)
});

it("should return 404 when a subscriber cananot be deleted", async function(){
  return frisby
    .del("http://localhost:3000/api/subscribe/abcd")
    .expect("status", 404)
})
