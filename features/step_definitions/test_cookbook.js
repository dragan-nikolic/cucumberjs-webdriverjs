const {Given, When, Then} = require('cucumber')
const World = require('../support/world')

Given('I visit Test Cookbook website', function () {
  return this.driver.get('http://www.testcookbook.com');
});

Then('I see title Test Cookbook', function () {
  this.driver.getTitle().then(function (title) {
    assert.equal(title, "Test Cookbook");
    return title;
  })
})  
