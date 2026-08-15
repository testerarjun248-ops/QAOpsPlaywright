const{test,expect,request} = require('@playwright/test');

const {ApiUtils} = require('./utils/ApiUtils');

 //const url = "https://rahulshettyacademy.com/api/ecom/auth/login";
const loginPayload = {userEmail: "arjun.gupta756@gmail.com", userPassword: "Arjumeen@1234"};
//const placeOrderurl = "https://rahulshettyacademy.com/api/ecom/order/create-order";
const orderPayload = {orders: [{country: "Cuba", productOrderedId: "6960eac0c941646b7a8b3e68"}]};


let apiContext;

let response;
test.beforeAll(async()=>
{
apiContext = await request.newContext();
const apiObj = new ApiUtils(apiContext,loginPayload);
response = await apiObj.createOrder(orderPayload);
}
);


test("APICheck",async({page})=>

   {


   await page.addInitScript(value=>
   {
      window.localStorage.setItem('token',value);
   },response.token
);

//await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
await page.goto("https://rahulshettyacademy.com/client/#/dashboard/dash");
   await page.locator("button[routerlink*='myorders']").click();
   await page.locator("tbody").waitFor();
   const rows = await page.locator("tbody tr");
 
 
   for (let i = 0; i < await rows.count(); ++i) {
      const rowOrderId = await rows.nth(i).locator("th").textContent();
      if (response.orderId.includes(rowOrderId)) {
         await rows.nth(i).locator("button").first().click();
         break;
      }
   }
   const orderIdDetails = await page.locator(".col-text").textContent();
 expect(response.orderId.includes(orderIdDetails)).toBeTruthy();
   console.log(response.orderId);


}
);