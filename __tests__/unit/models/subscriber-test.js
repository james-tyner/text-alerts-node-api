const { expect } = require("chai");

const Subscriber = require("./../../../models/subscriber");

describe("subscriber", function(){

  describe("name", function(){
    it("should be a string", async function(){
      try {
        let subscriber = new Subscriber({name: ""});
        await subscriber.validate();
      } catch (error) {
        expect(error.errors[0].message).to.equal("You have to enter a name.");
      }
    })
  })

  describe("phone", function(){
    it("should be a number", async function(){
      try {
        let subscriber = new Subscriber({phone:"phone"});
        await subscriber.validate();
      } catch (error){
        expect(error.errors[0].message).to.equal("Phone number must be a number.")
      }
    })

    it("should be exactly 10 digits", async function(){
      try {
        let subscriber = new Subscriber({phone:123});
        await subscriber.validate();
      } catch (error){
        expect(error.errors[0].message).to.equal("Phone number must be from the US or Canada and exactly 10 digits.")
      }
    })
  })
})
