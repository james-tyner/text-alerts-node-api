const { expect } = require("chai");

const Message = require("./../../../models/messageRecord");

describe("user", function(){

  describe("message", function(){
    it("should be a string", async function(){
      try {
        let message = new Message({message:""});
        await message.validate();
      } catch (error) {
        expect(error.errors[0].message).to.equal("The alert must contain text.");
      }
    })
  })

  describe("mediaUrl", function(){
    it("should be a URL", async function(){
      try {
        let message = new Message({mediaUrl:"http://testing"});
        await message.validate();
      } catch (error) {
        expect(error.errors[0].message).to.equal("The image must be a valid image URL.");
      }
    })
  })

  describe("sender", function(){
    it("should be an integer", async function(){
      try {
        let message = new Message({sender:"abc"});
        await message.validate();
      } catch (error) {
        expect(error.errors[0].message).to.equal("Sender must be an integer.");
      }
    })
  })
})
