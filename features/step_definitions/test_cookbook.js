const defineSupportCode = require('cucumber').defineSupportCode
const World = require('../support/world')

defineSupportCode(function ({Given, When, Then}) {
  Given('I visit Test Cookbook website', function () {
    return this.driver.get('http://www.testcookbook.com');
  });

  Then('I see title Test Cookbook', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });  
});
