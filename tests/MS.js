module.exports = {
    tags: ['ms'],
    'Test LinkedIn' : function (browser) {
         browser 
         .url('https://www.microsoft.com/en-us/') // Go to a url
         .waitForElementVisible('body', 1000) // wait till page loads
         .pause(1000)
         .end();
       }
 };
 // = comment not necessary for codecls

 /*.assert.containsText('h3[class=subtitle]', "Get started - it's free.")
         .click('input[id=registration-submit]')
         .assert.containsText('span[class=alert-content]', "Please enter your first name")
         .waitForElementVisible('body', 1000) // wait till page loads
         .click('input[id=reg-firstname]')
         .setValue('input[id=reg-firstname]', 'Alejandro')
         .click('input[id=registration-submit]')
         .assert.containsText('span[class=alert-content]', "Please enter your last name")
         .setValue('input[id=reg-lastname]', 'Macias')
         .click('input[id=registration-submit]')
         .assert.containsText('span[class=alert-content]', "Please enter your email address")
         
         */
