module.exports = {
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
  };