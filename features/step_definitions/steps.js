
const{When, Then, Given} = require('@cucumber/cucumber')
const {POManager} = require('../../pageobjects/POManager.js');
 const {expect} = require('@playwright/test');
 const playwright = require('@playwright/test');

Given('a login to Ecommerce application with {string} and {string}',{timeout: 100 *1000}, async function (username, password) 
{
//const browser =await playwright.chromium.launch({headless:false});
  //  const context = await browser.newContext();
    //const page = await context.newPage();
      //  this.poManager = new POManager(page);
   //  const products = page.locator(".card-body");
        const products = this.page.locator(".card-body");
    const loginPage = this.poManager.getLoginPage();
     await loginPage.goTo();
     await loginPage.validLogin(username,password);

 
});

When('Add {string} to Cart', async function (productName) 
{
   this.dashboardPage = this.poManager.getDashboardPage();
     await this.dashboardPage.searchProductAddCart(productName);
     await this.dashboardPage.navigateToCart(); 
});

Then('Verify {string} is displayed in the Cart', async function (productName) 
{

    const cartPage = this.poManager.getCartPage();
    await cartPage.VerifyProductIsDisplayed(productName);
    await cartPage.Checkout();
});

When('Enter valid details and place the order', async function () 
{
  const ordersReviewPage = this.poManager.getOrdersReviewPage();
    await ordersReviewPage.searchCountryAndSelect("ind","India");
     this.orderId = await ordersReviewPage.SubmitAndGetOrderId();
   console.log(this.orderId);
});

Then('Verify order present in Order History Page', async function () 
{
await this.dashboardPage.navigateToOrders();
   const ordersHistoryPage = this.poManager.getOrdersHistoryPage();
   await ordersHistoryPage.searchOrderAndSelect(this.orderId);
   expect(this.orderId.includes(await ordersHistoryPage.getOrderId())).toBeTruthy();
});





Given('a login to Ecommerce2 application with {string} and {string}',{timeout:10*1000}, async function (username, password) 
{

    await this.page.goto("https://rahulshettyacademy.com/loginpagePractise/");
console.log(await this.page.title());
const signup = this.page.locator("[type='submit']");
await this.page.locator("input#username").fill("username");
await this.page.locator("[type='password']").fill("password");
await signup.click();
});

Then('Verify error displayed', async function () 

{
    console.log(await this.page.locator("[style*= 'block']").textContent());

await expect(this.page.locator("[style*= 'block']")).toContainText("Incorrect");
 
});