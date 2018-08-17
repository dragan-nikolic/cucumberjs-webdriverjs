/**
World is an isolated context for each scenario, exposed to the hooks and steps
as 'this'.

For more info refer to:
https://github.com/cucumber/cucumber-js/blob/master/docs/support_files/world.md
*/ 
 
var {setWorldConstructor} = require('cucumber')
var seleniumWebdriver = require('selenium-webdriver-3')

function CustomWorld({attach, parameters}) {
  // support default World parameters
  this.attach = attach
  this.parameters = parameters

  // create  webdriver
  this.webdriver = new seleniumWebdriver.Builder()
                  .forBrowser(parameters.browser)
                  .build();
}

setWorldConstructor(CustomWorld)
