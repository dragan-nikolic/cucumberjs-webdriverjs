var {setWorldConstructor} = require('cucumber')
var seleniumWebdriver = require('selenium-webdriver')

function CustomWorld() {
  this.driver = new seleniumWebdriver.Builder()
                  .forBrowser('firefox')
                  .build();
}

setWorldConstructor(CustomWorld)
