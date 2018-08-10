class Page {
  constructor(browser, baseUrl) {
    this.browser = browser
    this.baseUrl = baseUrl
  }

  open(extension) {
    this.browser.get(`${this.baseUrl}/${extension}`);
  }
}

module.exports = Page
