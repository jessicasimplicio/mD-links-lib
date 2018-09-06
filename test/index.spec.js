var mocha = require("mocha");
var chai = require("chai");
var index = require("../index");

var expect = chai.expect;

describe("index", function() {

  describe("#getLinksFromMd", function() {

    describe("when it doesn't have parameter", function() {
      it("should throw an error", function() {
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
          expect(index.getLinksFromMd("Oi você quer entrar no site [google](www.google.com) ?"))
            .to.deep.equal([{href: "www.google.com", text: "google"}]);

          expect(index.getLinksFromMd("Oi você quer comer [momolamen](www.momolamen.com.br) ?"))
            .to.deep.equal([{href: "www.momolamen.com.br", text: "momolamen"}]);
        });
      }); 

      describe("and it has more than one URLs", function() {
        it("should return an array with objects", function() {
          expect(index.getLinksFromMd("# Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing" +
            "elit, sed do eiusmod tempor  incididunt ut [labore](https://en.wiktionary.org/wiki/labore) et " +
            "[dolore](https://en.wiktionary.org/wiki/dolore) magna aliqua. Ut enim ad minim veniam, " +
            "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." +
            "[foo](http://foo.com)" +
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat " +
            "nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia " +
            "deserunt mollit anim id est laborum."))
            .to.deep.equal([
              { href: 'https://en.wiktionary.org/wiki/labore', text: 'labore' },
              { href: 'https://en.wiktionary.org/wiki/dolore', text: 'dolore' },
              { href: 'http://foo.com', text: 'foo' },
            ]);

        });
      });

    });

  });


}); 