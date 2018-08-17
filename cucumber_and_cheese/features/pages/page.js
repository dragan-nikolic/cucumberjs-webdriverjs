class Page {
  constructor(browser, baseUrl) {
    this.browser = browser
    this.baseUrl = baseUrl
  }

  open(extension) {
    this.browser.get(`${this.baseUrl}/${extension}`);
  }

  getTitle() {
    return this.browser.getTitle()
  }
}

module.exports = Page
