const mocha = require('mocha');
const chai = require('chai');
const should = chai.should();

const serverless = require('../serverless');

describe("The handler function", () => {
    it("returns a message", () => {
        serverless.handle(undefined, undefined, function(error, response){
            let body = JSON.parse(response.body);
            body.message.should.be.equal('Go Serverless v1.0! Your function executed successfully!');
        });
    });
});