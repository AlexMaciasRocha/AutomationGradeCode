/*module.exports = {
    tags: ['youtube'],
    before : function(browser) {
      console.log('Setting up...');
    },
  
    after : function(browser) {
      console.log('Closing down...');
    },
  
    beforeEach : function(browser) {
  
    },
  
    afterEach : function(browser) {
  
    },
  
    'step one' : function (browser) {
      browser
       // ...
    },
  
    'step two' : function (browser) {
      browser
      // ...
        .end();
    }
  };*/

  module.exports = {
    tags: ['youtube'],
    'Test Youtube' : function (browser) {
         browser.maximizeWindow()
         .url('https://www.youtube.com/') // Go to a url
         .waitForElementVisible('body', 5000) // wait till page loads
         .click('yt-icon-button[id="guide-button"]')
         .waitForElementVisible('body', 5000)
         .assert.containsText('a[title="Home"]', "Home")
         .waitForElementVisible('body', 5000)
         .assert.containsText('a[title="Trending"]', "Trending")
         .waitForElementVisible('body', 5000)
         .assert.containsText('a[title="History"]', "History")
         .waitForElementVisible('body', 5000)
         .assert.containsText('paper-button[aria-label="Sign in"]', "SIGN IN")
         .click('button[aria-label="YouTube apps"]')
         .click('form[id=search-form]')
         .setValue('input[id="search"]', 'Automating with Node.js – 001')
         .click('button[class="style-scope ytd-searchbox"]')
         .pause(1000000)
         .end();
   
        }
 };

