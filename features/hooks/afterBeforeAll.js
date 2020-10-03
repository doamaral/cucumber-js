const { BeforeAll, AfterAll } = require("@cucumber/cucumber");

BeforeAll(function(){
    console.log("\nBefore any Test\n");
});

AfterAll(function(){
    console.log("\nAfter all Tests\n");
});