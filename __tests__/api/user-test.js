const frisby = require("frisby");
const { Joi } = frisby;


it("should update a user’s phone number", function(){
  return frisby
    .fetch("http://localhost:3000/api/user/phone/fake@jamestyner.com", {
      method:"PATCH",
      body:JSON.stringify({
        phone:1119992345
      })
    })
    .expect("status", 200)
    .expect("json", "phone", 1119992345)
    .expect("jsonTypes", "id", Joi.number().required())
});

it("should return 404 when a user’s phone number can’t be updated", function(){
  return frisby
  .fetch("http://localhost:3000/api/user/phone/nonexistent@jamestyner.com", {
    method:"PATCH",
    body:JSON.stringify({
      phone:1119992345
    })
  })
  .expect("status", 404)
});
