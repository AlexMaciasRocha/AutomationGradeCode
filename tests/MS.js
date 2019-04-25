module.exports = {
    tags: ['ms'],
    'Test LinkedIn' : function (browser) {
         browser 
         .url('https://www.microsoft.com/en-us/') // Go to a url
         .waitForElementVisible('body', 1000) // wait till page loads
         .click('a[id=shellmenu_1]')
         .click('button[id=c-shellmenu_42]')
         .waitForElementVisible('body', 1000)
         .assert.containsText('a[id=c-shellmenu_43]', "Buy Windows 10 Home")
         .assert.containsText('a[id=c-shellmenu_45]', "Why Windows 10")
         .assert.containsText('a[id=c-shellmenu_46]', "Features")
         .click('a[id=c-shellmenu_43]')
         .waitForElementVisible('body', 1000) // wait till page loads
         .click('a[id=c-shellmenu_43]')
         //.click('div[class=c-glyph glyph-cancel]')
         //.assert.containsText('a[id=titleGroup]', "Windows 10 Home")
         .pause(1000000)
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
