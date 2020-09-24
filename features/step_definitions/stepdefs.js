const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');

function isItFriday(today) {
  if(today == 'friday'){
      return "Yes";
  }
  return "Nope";
}

Given("today is Sunday", function () {
    this.today = "sunday"
});

When("I ask whether it's Friday yet", function () {
    this.actualAnswer = isItFriday(this.today);
});

Then("I should be told {string}", function (expectedAnswer) {
    assert.strictEqual(this.actualAnswer, expectedAnswer);
});