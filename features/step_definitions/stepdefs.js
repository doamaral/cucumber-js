const assert = require('assert');
const chai = require("chai");
const expect = chai.expect;

const { Given, When, Then } = require('@cucumber/cucumber');

const helper = require("../../helpers/lib");

Given("today is Sunday", function () {
    this.today = "sunday"
});

When("I ask whether it's Friday yet", function () {
  this.actualAnswer = helper.isItFriday(this.today);
});

Then("I should be told {string}", function (expectedAnswer) {
    assert.strictEqual(this.actualAnswer, expectedAnswer);
});


Given("a letter {string}", function (firstLetter) {
  this.letter = firstLetter;
});

When("test for a", function () {
  this.expectedLetter = "a";
});

When("test for {string}", function (secondLetter) {
  this.expectedLetter = secondLetter;
});

Then("it's going to work just fine", function () {
  expect(this.letter).to.eql(this.expectedLetter);
});

Then("it's going to accuse difference", function () {
  expect(this.letter).not.eql(this.expectedLetter);
});

Then("it's going message {string}", function (message) {
  expect(message).to.eql(helper.testFor(this.letter, this.expectedLetter));
});