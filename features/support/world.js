/**
World is an isolated context for each scenario, exposed to the hooks and steps
as 'this'.

For more info refer to:
https://github.com/cucumber/cucumber-js/blob/master/docs/support_files/world.md
*/ 
 
var {setWorldConstructor} = require('cucumber')
var seleniumWebdriver = require('selenium-webdriver')

function CustomWorld({attach, parameters}) {
  this.attach = attach
  this.parameters = parameters
  this.driver = new seleniumWebdriver.Builder()
                  .forBrowser(parameters.browser)
                  .build();
}

setWorldConstructor(CustomWorld)
