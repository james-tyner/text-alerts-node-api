const frisby = require("frisby");
const { Joi } = frisby;

it("should return a single alert", async function(){
  return frisby.get("http://localhost:3000/api/alerts")
    .expect("status", 200)
    .expect('jsonTypes', {
      id: Joi.number(),
      message: Joi.string(),
      user:Joi.object()
    });
});

// There is no way to force this into a 404 state. Even if there are no alerts, response 200 will be returned with content-type JSON and an empty array
