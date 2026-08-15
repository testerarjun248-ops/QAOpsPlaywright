const {test, expect} = require('@playwright/test');


test('@Web First Playwright Test',async ({browser})=>
{
//chrome --cookies
const context = await browser.newContext(); // this needed when p/c proxy,cookies
const page = await context.newPage(); // when new page in that incognito window
page.route('**/*.css',route=>route.abort());
page.route('**/*.{jpg,png,jpeg}',route=>route.abort());
//INKE NICHE HI BAKI CONST AAEGE

const username = page.locator("input#username");
const password = page.locator("[type='password']");
const signup = page.locator("[type='submit']");
const cardTypes = page.locator(".card-body a");

page.on('request',request=>console.log(request.url()));
page.on('response',response=>console.log(response.url(),response.status()));
await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
console.log(await page.title());

//await page.locator("input#username").fill("rahulshetty");
//await page.locator("[type='password']").fill("learning");
//await page.locator("[type='submit']").click();

await username.fill("rahulshetty");
await password.fill("learning");
await signup.click();

console.log(await page.locator("[style*= 'block']").textContent());

await expect(page.locator("[style*= 'block']")).toContainText("Incorrect");

//await page.locator("input#username").fill("");
//await page.locator("input#username").fill("rahulshettyacademy");
//await page.locator("[type='password']").fill("");
//await page.locator("[type='password']").fill("Learning@830$3mK2");
//await page.locator("[type='submit']").click();

await username.fill("");
await username.fill("rahulshettyacademy");
await password.fill("");
await password.fill("Learning@830$3mK2");
await signup.click();

//console.log(await page.locator("//a[text()='iphone X']").textContent());
//const text = await page.locator("//a[text()='iphone X']").textContent();
//console.log(text);
//await page.pause();

//console.log(await cardTypes.textContent());
//console.log(await cardTypes.nth(1).textContent());
//console.log(await cardTypes.first().textContent());


//await page.waitForLoadState('networkidle');

await cardTypes.first().waitFor();
const allTitles = await cardTypes.allTextContents();
console.log(allTitles);



}
);



test('First Playwright Tests Simple',async ({browser,page})=>
{
//chrome --cookies
//const context = await browser.newContext();
//const page = await context.newPage();
//normal browser load, no seperate tab case
await page.goto("https://www.google.com/");
console.log(await page.title());
await expect(page).toHaveTitle("Google");

}
);






test("UI tests",async ({browser,page})=>
{
//const context = await browser.newContext();
//const page = await context.newPage();

const doclink = page.locator("[href*='documents-request']");
await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
console.log(await page.title());


await page.locator("input#username").fill("rahulshettyacademy");
await page.locator("[type='password']").fill("");
await page.locator("[type='password']").fill("Learning@830$3mK2");



await page.locator(".radiotextsty").nth(1).click();
await page.locator("#okayBtn").click();

 console.log(await page.locator(".radiotextsty").nth(1).isChecked());
await expect( page.locator(".radiotextsty").nth(1)).toBeChecked(); 
//AWAIT NOT NEED INSIDE AS CHECK ACTION PERFORMED OUTSIDE BRACKET

 expect(await page.locator(".radiotextsty").nth(1).isChecked()).toBeTruthy();
//AWAIT NEEDED INSIDE AS ACTION BEING PERFORMED

const dropdown = page.locator("select.form-control");
dropdown.selectOption("consult");
await page.locator("#terms").click();
await page.locator("#terms").uncheck();

 expect(await page.locator('#terms').isChecked()).toBeFalsy();

await expect(doclink).toHaveAttribute("class","blinkingText"); //tobe exact

await page.locator("[type='submit']").click();
await page.waitForURL("**/angular**");
console.log(await page.title());

//await expect(await page.title()).toContainText('Proto'); --error as it works on locator

await expect(await page.title()).toContain('Proto');


});

test('Child windows hadl', async ({browser})=>
 {
    const context = await browser.newContext();
    const page =  await context.newPage();
    const userName = page.locator('#username');
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const documentLink = page.locator("[href*='documents-request']");
 
    const [newPage]=await Promise.all(
   [
      context.waitForEvent('page'),//listen for any new page pending,rejected,fulfilled
      documentLink.click()
   
   ])//new page is opened
   
 
   const  text = await newPage.locator(".red").textContent();// no issue here as part of DOM
    const arrayText = text.split("@");
    //const domain =  arrayText[1].split(" ")[0]
 const right = arrayText[1].split(" ");
 const domain = right[0];
   // const domain
    console.log(domain);
    await page.locator("#username").fill(domain);
    console.log(await page.locator("#username").inputValue());// AS USER ENTERED
 
 })
 