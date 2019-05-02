const { expect } = require("chai");

const UserRequest = require("./../../../models/userRequest");

describe("user", function(){

  describe("fname", function(){
    it("should be a string", async function(){
      try {
        let request = new UserRequest({name: 23});
        await request.validate();
      } catch (error) {
        expect(error.errors[0].message).to.equal("That first name isn’t valid.");
      }
    })
  })

  describe("lname", function(){
    it("should be a string", async function(){
      try {
        let request = new UserRequest({name: 23});
        await request.validate();
      } catch (error) {
        expect(error.errors[0].message).to.equal("That first name isn’t valid.");
      }
    })
  })

  describe("email", function(){
    it("should be an email address", async function(){
      try {
        let request = new UserRequest({email:"fake@jamestyner"});
        await request.validate();
      } catch (error) {
        expect(error.errors[0].message).to.equal("That isn’t a valid email address.");
      }
    })
  })
})
