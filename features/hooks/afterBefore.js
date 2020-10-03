const { Before, After } = require("@cucumber/cucumber");

Before({tags: "@tag"}, function () {
    console.log("\nBefore each Test tagged with @tag\n");
});

Before(function () {
    console.log("\nBefore each Test\n");
});

After(function () {
    console.log("\nAfter each Test\n");
});