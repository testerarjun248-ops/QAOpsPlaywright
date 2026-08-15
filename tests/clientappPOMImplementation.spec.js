// //anshika@gmail.com
// //Iamking@00

// const { test, expect } = require('@playwright/test');
// //const{LoginPage} = require('../pageobjects/LoginPage.js') ;
// //const{DashboardPage} = require('../pageobjects/DashboardPage.js') ;
// const{POManager} = require('../pageobjects/POManager.js');


// test('@Webst Client App login E2E', async ({ page }) => 
//    {

//       const poManager = new POManager(page);
//    //js file- Login js, DashboardPage
//      const username = "arjun.gupta756@gmail.com";
//    const password = "Arjumeen@1234";
//    const productName = 'ZARA COAT 3';
  
// //const loginPage = new LoginPage(page);
// const loginPage = poManager.getLoginPage();

// await loginPage.goto();
// await loginPage.validLogin(username,password);

// const dashboardPage = poManager.getDashboardPage();

// await dashboardPage.searchProductAddCart(productName);
// await dashboardPage.navigateToCart();

//  //  await page.locator(".card-body b").first().waitFor();
   
//    await page.locator("div li").first().waitFor();
//    const bool = await page.locator("h3:has-text('ZARA COAT 3')").isVisible();
//    expect(bool).toBeTruthy();
//    await page.locator("text=Checkout").click();

   
 
//   await page.getByPlaceholder('Select Country').pressSequentially("ind", { delay: 150 }) 
//    const dropdown = page.locator(".ta-results");
//    await dropdown.waitFor();
//    const optionsCount = await dropdown.locator("button").count();
//    for (let i = 0; i < optionsCount; ++i) {
//       const text = await dropdown.locator("button").nth(i).textContent();
//       if (text === " India") {
//          await dropdown.locator("button").nth(i).click();
//          break;
//       }
//    }
 
//    expect(page.locator(".user__name [type='text']").first()).toHaveText(username);
//    await page.locator(".action__submit").click();
//    await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
//    const orderId = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
//    console.log(orderId);
 
//    await page.locator("button[routerlink*='myorders']").click();
//    await page.locator("tbody").waitFor();
//    const rows = await page.locator("tbody tr");
 
 
//    for (let i = 0; i < await rows.count(); ++i) {
//       const rowOrderId = await rows.nth(i).locator("th").textContent();
//       if (orderId.includes(rowOrderId)) {
//          await rows.nth(i).locator("button").first().click();
//          break;
//       }
//    }
//    const orderIdDetails = await page.locator(".col-text").textContent();
//    expect(orderId.includes(orderIdDetails)).toBeTruthy();
 
// });
 






 const {test, expect} = require('@playwright/test');
 const {customtest} = require('./utils/test-base.js');
 const {POManager} = require('../pageobjects/POManager.js');
const dataset = JSON.parse(JSON.stringify(require('./utils/placeorderTestData.json')));


for(const data of dataset)
{
 //test('Client App login', async ({page})=>
  test(`@Web Client App login ${data.productName}`, async ({page})=>
 {
   console.log("hello");
   const poManager = new POManager(page);
    //js file- Login js, DashboardPage
    // const username = "arjun.gupta756@gmail.com";
     //const password = "Arjumeen@1234"
     //const productName = 'ZARA COAT 3';
     const products = page.locator(".card-body");
     const loginPage = poManager.getLoginPage();
     await loginPage.goTo();
     await loginPage.validLogin(data.username,data.password);
     const dashboardPage = poManager.getDashboardPage();
     await dashboardPage.searchProductAddCart(data.productName);
     await dashboardPage.navigateToCart();

    const cartPage = poManager.getCartPage();
    await cartPage.VerifyProductIsDisplayed(data.productName);
    await cartPage.Checkout();

    const ordersReviewPage = poManager.getOrdersReviewPage();
    await ordersReviewPage.searchCountryAndSelect("ind","India");
    const orderId = await ordersReviewPage.SubmitAndGetOrderId();
   console.log(orderId);
   await dashboardPage.navigateToOrders();
   const ordersHistoryPage = poManager.getOrdersHistoryPage();
   await ordersHistoryPage.searchOrderAndSelect(orderId);
   expect(orderId.includes(await ordersHistoryPage.getOrderId())).toBeTruthy();

 });
 
}



 customtest("Client App login", async ({page,testDataForOrder})=>
 {
   console.log("hello");
   const poManager = new POManager(page);
    //js file- Login js, DashboardPage
    // const username = "arjun.gupta756@gmail.com";
     //const password = "Arjumeen@1234"
     //const productName = 'ZARA COAT 3';
     const products = page.locator(".card-body");
     const loginPage = poManager.getLoginPage();
     await loginPage.goTo();
     await loginPage.validLogin(testDataForOrder.username,testDataForOrder.password);
     const dashboardPage = poManager.getDashboardPage();
     await dashboardPage.searchProductAddCart(testDataForOrder.productName);
     await dashboardPage.navigateToCart();

    const cartPage = poManager.getCartPage();
    await cartPage.VerifyProductIsDisplayed(testDataForOrder.productName);
    await cartPage.Checkout();

 });
 
