module.exports = {
    tags: ['linkedin'],
    'Test LinkedIn' : function (browser) {
         browser 
         .url('https://www.linkedin.com/') // Go to a url
         .waitForElementVisible('body', 1000) // wait till page loads
         .assert.containsText('h3[class=subtitle]', "Get started - it's free.")
         .click('input[id=registration-submit]')
         .assert.containsText('span[class=alert-content]', "Please enter your first name")
         .setValue('input[id=reg-firstname]','Alejandro')
         .click('input[id=registration-submit]')
         .assert.containsText('span[class=alert-content]', "Please enter your last name")
         .setValue('input[id=reg-lastname]','Macias')
         .click('input[id=registration-submit]')
         .assert.containsText('span[class=alert-content]', "Please enter your email address")
         .pause(10000)
         .end();
       }
 };
 // = comment not necessary for codecls
