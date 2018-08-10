const assert = require('assert')
const {Given, When, Then} = require('cucumber')
const World = require('../support/world')

Given('I visit Test Cookbook website', async function () {
  await this.driver.get('http://www.testcookbook.com');
});

Then('I see title Test Cookbook', async function () {
  const title = await this.driver.getTitle()
  assert.equal(title, "Test Cookbook")
})  
