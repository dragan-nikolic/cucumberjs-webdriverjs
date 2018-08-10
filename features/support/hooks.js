var {After, Before} = require('cucumber');

Before(function (scenario) {
  console.log(`Before: scenario ${scenario.pickle.name}`)
});

After(function (scenario) {
  console.log(`After: scenario ${scenario.pickle.name} ${scenario.result.status}`)
  this.driver.quit()
});
