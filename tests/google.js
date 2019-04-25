
/*module.exports = {
  tags: ['google'],
  'Demo test Google' : function (browser) {
       browser 
       .url('http://www.google.com') // Go to a url
       .waitForElementVisible('body', 1000) // wait till page loads
       .assert.title('Google') // Make sure Site title matches
       .assert.visible('input[type=text]') 
       //.setValue('fake-input[type=text]', 'nightwatchjs') // send values
       //.click('button[name=btnG]') // click on search box
       .pause(1000)
       .end();
     }
};*/

module.exports = {
  tags: ['google'],
  'main': browser => {

    browser.url('http://google.com')
      .waitForElementVisible('body', 1000)

   // browser.assert.elementPresent('input[value="Google Search"]')
    // Take one screenshot at the homepage and save it as homepage.png
      .saveScreenshot('./reports/homepage.png')

    browser.setValue('#lst-ib', 'Nightwatch')

    browser.click('input[value="Google Search"]')
      .waitForElementVisible('#resultStats', 1000)
      // Take another screenshot at the search result page and save it as search-result.png
      .saveScreenshot('./reports/search-result.png')

    browser.end()
  }
}