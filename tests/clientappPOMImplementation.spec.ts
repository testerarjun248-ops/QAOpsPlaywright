
 import{test,expect} from '@playwright/test';
 import{POManager} from '../pageobjects_ts/POManager.js';
import{customtest} from './utils_ts/test-base.ts'
const dataset = JSON.parse(JSON.stringify(require('./utils_ts/placeorderTestData.json')));


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

    let orderId:any;
     orderId = await ordersReviewPage.SubmitAndGetOrderId();
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
 
