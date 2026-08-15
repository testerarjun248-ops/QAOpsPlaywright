

const{test,expect,request} = require('@playwright/test')

let token;
let orderId;

test.beforeAll(async()=>
{
const loginPayload = {userEmail: "arjun.gupta756@gmail.com", userPassword: "Arjumeen@1234"};
const loginUrl = "https://rahulshettyacademy.com/api/ecom/auth/login";
const orderPayload = {orders: [{country: "Cuba", productOrderedId: "6960eac0c941646b7a8b3e68"}]};
const orderUrl = "https://rahulshettyacademy.com/api/ecom/order/create-order";


const apiContext = await request.newContext();
const apiResponse = await apiContext.post(loginUrl,{data:loginPayload});
const apiResponseJson = await apiResponse.json();

 token = apiResponseJson.token;
console.log(token);

const orderApiResponse = await apiContext.post(orderUrl,{data:orderPayload, headers:
    {
'content-type' : 'application/json',
'authorization' : token
    }}
)

const orderResponseJson = await orderApiResponse.json();

orderId = orderResponseJson.orders[0];
console.log(orderId); 



}
);



test("APIlogiccheck",async({page})=>
{

    await page.addInitScript(value=>
    {
window.localStorage.setItem('token',value);
    },token);

    //await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    //await page.pause();

    await page.goto("https://rahulshettyacademy.com/client/#/dashboard/dash");
await page.locator("[routerlink='/dashboard/myorders']").waitFor();
    await page.locator("[routerlink='/dashboard/myorders']").click();
    await page.locator("tbody").waitFor();
   const rows = await page.locator("tbody tr");
 
   for (let i = 0; i < await rows.count(); ++i) {
         const rowOrderId = await rows.nth(i).locator("th").textContent();
         if (orderId.includes(rowOrderId)) {
            await rows.nth(i).locator("button").first().click();
            break;
         }
      }
      const orderIdDetails = await page.locator(".col-text").textContent();
      expect(orderId.includes(orderIdDetails)).toBeTruthy();
      console.log(orderId);

}
);

