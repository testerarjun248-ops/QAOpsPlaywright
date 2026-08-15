const {test, expect, request} = require('@playwright/test');
//const{customtest}=require("./utils/fixtures.js"); SAME
const{customtest}=require("../tests/utils/fixtures.js");

customtest('fixturesdemo',async({authenticatedPage,createOrder,testDataForOrder})=>
{
//login/ create order and verify if order created

authenticatedPage.goto("https://rahulshettyacademy.com/client/#/dashboard/dash");
 await authenticatedPage.locator("button[routerlink*='myorders']").click();
   await authenticatedPage.locator("tbody").waitFor();


   await expect(authenticatedPage.getByText(createOrder.orderId)).toBeVisible();
   console.log(testDataForOrder.productName);


}
);
