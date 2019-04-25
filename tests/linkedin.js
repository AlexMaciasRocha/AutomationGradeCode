module.exports = {
    tags: ['linkedin'],
    'Test LinkedIn' : function (browser) {
         browser 
         .url('https://www.linkedin.com/') // Go to a url
         .waitForElementVisible('body', 1000) // wait till page loads
         //.click('button[name=btnG]') // click on search box
         .pause(1000)
         .end();
       }
 };
 // = comment not necessary for codecls
