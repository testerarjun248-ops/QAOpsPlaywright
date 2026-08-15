import { expect, type Locator, type Page } from '@playwright/test';

export class ApiUtils
{
apiContext:any;
loginPayload:string;
    constructor(apiContext:any,loginPayload:string)
    {
this.apiContext =apiContext;
this.loginPayload = loginPayload;
    }

    async getToken()

    {

        const loginResponse = await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",{data:this.loginPayload});
await expect(loginResponse.ok()).toBeTruthy();
const loginResponseJson = await loginResponse.json();
const token =  loginResponseJson.token;
//console.log(token);
return token;

    }


    async createOrder(orderPayload:string,placeOrderurl:string)
    {
        
        let response = {token:String,orderId : String};
        //let response: {
//token: string;
//orderId: string;
//};

//response = {
//token: await this.getToken(),
//orderId: ""
//};
        response.token = await this.getToken();
        const placeOrderResponse = await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",{
           data:orderPayload,
           headers:
           {
              'Authorization' :  response.token,
              'Content-Type' : 'application/json'
           }
        })
        
        const placeOrderResponseJson = await placeOrderResponse.json();
        let orderId = placeOrderResponseJson.orders[0];

         response.orderId = orderId;
         return response;
    }

}

module.exports = {ApiUtils};