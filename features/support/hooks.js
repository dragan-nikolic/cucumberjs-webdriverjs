var {After, Before} = require('cucumber');

Before(async function (scenario) {
  console.log(`Before: scenario ${scenario.pickle.name}`)
  console.log(this.parameters)
});

After(async function (scenario) {
  console.log(`After: scenario ${scenario.pickle.name} ${scenario.result.status}`)
  this.driver.quit()
});
