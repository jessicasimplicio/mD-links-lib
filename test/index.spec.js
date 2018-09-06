var mocha = require("mocha");
var chai = require("chai");
var index = require("../index");

var expect = chai.expect;

describe("index", function() {

  describe("#getLinksFromMd", function() {

    describe("when it doesn't have parameter", function() {
      it("should throw an error", function() {
        //expect(() => index.getLinksFromMd("")).to.throw(TypeError);
        expect(() => index.getLinksFromMd()).to.throw("Não pode ser vazio. Insira um texto.");
      });
    });

    describe("when it's a number", function() {
      it("should throw an error", function() {
        expect(() => index.getLinksFromMd(123)).to.throw(TypeError);
        expect(() => index.getLinksFromMd(0)).to.throw(TypeError);
        expect(() => index.getLinksFromMd(-2344)).to.throw(TypeError);
      });
    });

    describe("when it's an empty string", function() {
      it("should return an empty array", function() {
        expect(index.getLinksFromMd("")).to.be.an('array');
        expect(index.getLinksFromMd("")).to.be.empty;
      });
    });

    describe("when it's not an empty strig", function() {

      describe("and it has one URL", function() {
        it("should return an array with one object", function() {
          //expect(() => index.cardValidator(2)).to.throw(TypeError);
        });
      }); 

      describe("and it has more than one URLs", function() {
        it("should return an array with objects", function() {
          
                              
        });
      });
    });

  });


}); 