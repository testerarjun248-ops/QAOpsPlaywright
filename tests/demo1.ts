

// let message1 : string = "Hello";
// //message1=2;


// message1 = "bye";

// let numbers : number[] = [1,2,3];

// let anyone : any = "ABCD";
// anyone=3; //allowed

// console.log(anyone);
// console.log(numbers);



// function add1(a: number,b: number) : number
// {
//     return a +b;
// }

// console.log(add1(3,4));

// let user1 : {name:string, age:number} = 
// {
// name: "Arjun",
// age: 34
// }

// console.log(user1.age);







import { expect, type Locator, type Page } from '@playwright/test';
class CartPage
{
    page: Page;
    cartProducts : Locator;
    productsText: Locator;
    cart: Locator;
    orders : Locator;
    checkout : Locator;
constructor(page: any)
{
    this.page = page;
    this.cartProducts = page.locator("div li").first();
    this.productsText = page.locator(".card-body b");
    this.cart =  page.locator("[routerlink*='cart']");
    this.orders = page.locator("button[routerlink*='myorders']");
    this.checkout = page.locator("text=Checkout");
    //this.productLoc = page.locator("h3:has-text('"+productName+"')";

}

async VerifyProductIsDisplayed(productName:any)
{
   
    await this.cartProducts.waitFor();
   // const bool =await this.getProductLocator(productName).isVisible();
    const bool = await  this.page.locator("h3:has-text('"+productName+"')").isVisible();
    expect(bool).toBeTruthy();

}

async Checkout()
{
    await this.checkout.click();
}

 getProductLocator(productName:any)
{
    return  this.page.locator("h3:has-text('"+productName+"')");
}

}
module.exports = {CartPage};