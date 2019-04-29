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
         .click('div[class="c-glyph glyph-cancel"')
         .waitForElementVisible('body', 1000)
         .assert.containsText('p[class="Paragraph SCX256709826"]', "¿Buscas características empresariales?")
         .click('form[id=searchForm]')
         .setValue('input[id=cli_shellHeaderSearchInput]', 'Visual Studio Community')
         .click('button[id=search]')
         .saveScreenshot('./reports/SearchEvidence.png')
         .assert.containsText('div[data-grid=col-2]', "1-20 de ")
         .click('li[data-label="Página 2"]')
         .assert.containsText('div[data-grid=col-2]', "21-40 de ")
         .click('li[data-label="Página 3"]')
         .assert.containsText('div[data-grid=col-2]', "41-60 de ")
         .pause(1000000)
         .end();
       }
 };