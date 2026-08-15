

const base = require('@playwright/test')
const {ApiUtils} = require('./ApiUtils.js');
const{request} = require('@playwright/test');
const loginPayload = {userEmail: "arjun.gupta756@gmail.com", userPassword: "Arjumeen@1234"};
const orderPayload = {orders: [{country: "Cuba", productOrderedId: "6960eac0c941646b7a8b3e68"}]};

exports.customtest =base.test.extend(
    {
    authenticatedPage : async({browser},use)=>
    {
        const context =await browser.newContext();
        const page =await context.newPage();
    const email = "arjun.gupta756@gmail.com";
    await page.goto("https://rahulshettyacademy.com/client");
   await page.locator("#userEmail").fill(email);
   await page.locator("#userPassword").fill("Arjumeen@1234");
   await page.locator("[value='Login']").click();
   await page.waitForLoadState('networkidle');

   await use(page);

   //tear down : these will run after entire test done
   console.log("arjun");
await context.close();

    },
createOrder : async({},use)=>
{
const apiContext = await request.newContext();
const apiObj = new ApiUtils(apiContext,loginPayload);
const response = await apiObj.createOrder(orderPayload);
await use(response);


await apiContext.dispose();
},
testDataForOrder : {

productName  :  'ADIDAS ORIGINAL'
}
 }
);