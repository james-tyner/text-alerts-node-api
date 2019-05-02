const { expect } = require("chai");

const User = require("./../../../models/user");

describe("user", function(){

  describe("fname", function(){
    it("should be a string", async function(){
      try {
        let user = new User({name: 23});
        await user.validate();
      } catch (error) {
        expect(error.errors[0].message).to.equal("That first name isn’t valid.");
      }
    })
  })

  describe("lname", function(){
    it("should be a string", async function(){
      try {
        let user = new User({name: 23});
        await user.validate();
      } catch (error) {
        expect(error.errors[0].message).to.equal("That first name isn’t valid.");
      }
    })
  })

  describe("email", function(){
    it("should be an email address", async function(){
      try {
        let user = new User({email:"fake@jamestyner"});
        await user.validate();
      } catch (error) {
        expect(error.errors[0].message).to.equal("That isn’t a valid email address.");
      }
    })
  })

  describe("super", function(){
    it("should be either true or false", async function(){
      try {
        let user = new User({super:17});
        await user.validate();
      } catch (error){
        expect(error.errors[0].message).to.equal("That user level isn’t valid.");
      }
    })
  })

  describe("phone", function(){
    it("should be a number", async function(){
      try {
        let user = new User({phone:"phone"});
        await user.validate();
      } catch (error){
        expect(error.errors[0].message).to.equal("Phone number must be a number.")
      }
    })

    it("should be exactly 10 digits", async function(){
      try {
        let user = new User({phone:123});
        await user.validate();
      } catch (error){
        expect(error.errors[0].message).to.equal("Phone number must be from the US or Canada and exactly 10 digits.")
      }
    })
  })
})
