const{test,expect} = require('@playwright/test')

test("frames",async({page})=>
{
await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

page.on('dialog',dialog=>dialog.accept()); //dismiss
await page.locator("#confirmbtn").click();

const framesPage=await page.frameLocator("courses-iframe");
await framesPage.locator("li a[href*='lifetime']:visible").click();

}
);