 const playwright = require('@playwright/test');
 const {POManager} = require('../../pageobjects/POManager.js');
 const{Before,After,AfterStep,BeforeStep,Status} = require('@cucumber/cucumber')

//Before({tags: "@hoo"},async function()
Before(async function()
{

    const browser =await playwright.chromium.launch({headless:false});
    const context = await browser.newContext();
    //const page = await context.newPage();
    this.page = await context.newPage();
        this.poManager = new POManager(this.page);

});


After(function()
{
//tear down
    console.log("last to execute");

});

BeforeStep(function()
{

});

AfterStep(async function({result})
{
if(result.status == Status.FAILED)
{
    await this.page.screenshot({path : "screenshot123.png"});
}
});