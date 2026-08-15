const{test,expect} = require('@playwright/test')

test("E2E Locators",async({page})=>
{

    test.setTimeout(50000);
    const email = "arjun.gupta756@gmail.com";
await page.goto("https://rahulshettyacademy.com/client");
   await page.locator("#userEmail").fill(email);
   await page.locator("#userPassword").type("Arjumeen@1234");
   await page.locator("[value='Login']").click();

   await page.waitForLoadState('networkidle');
   await page.locator(".card-body").nth(0).waitFor();
   console.log(await page.title());

   const orderCount = await page.locator(".card-body").count();
   console.log(orderCount);

   for(let i=0;i<orderCount;i++)
   {
    if(await page.locator(".card-body b").nth(i).textContent()==="ADIDAS ORIGINAL")
    {
        await page.locator(".card-body").nth(i).locator("text= Add To Cart").click();
        break;
    }
   }

await page.locator("[routerlink='/dashboard/cart']").click();

await page.locator("div li").first().waitFor();
   const bool = await page.locator("h3:has-text('ZARA COAT 3')").isVisible();
   expect(bool).toBeTruthy();
//await expect(page.locator("text=Checkout")).toBeVisible();
await page.locator("text=Checkout").click();

await page.waitForURL("**dashboard/order**");

await page.locator("[placeholder='Select Country']").pressSequentially("ind",{delay:150});
await page.locator(".ta-results").waitFor();
const countryCount = await page.locator(".ta-results button").count();

console.log("Country Count:",countryCount);

for(let i=0;i<countryCount;i++)
    {
        if((await page.locator(".ta-results button").nth(i).textContent())?.trim()
            ==="India")
        {
            await page.locator(".ta-results button").nth(i).click();
            break;
        }
    }
//await expect(await page.locator("label[type='text']")).toHaveText("arjun"); CHECKS FOR EXACT
await expect(await page.locator("label[type='text']")).toContainText("arjun");
console.log(await page.locator("label[type='text']").textContent());

await page.locator("text = PLACE ORDER").click();

await page.locator(".hero-primary").waitFor();
console.log(await page.locator(".hero-primary").textContent());
const orderid = await page.locator("label.ng-star-inserted").textContent();
console.log("Order Id:",orderid);
await page.locator("[routerlink='/dashboard/myorders']").first().click();
await page.locator("tbody").waitFor();
const orderCounts = await page.locator("tbody tr").count();
console.log("order count:",orderCounts);

for(let i=0;i<orderCounts;i++)
{
    if(orderid.includes(await page.locator("tbody tr th").nth(i).textContent()))
    {
        await page.locator("tbody tr").nth(i).locator("text=View").click();
        break;
    }
}

await page.locator(".col-text").waitFor();
await expect(orderid.includes(await page.locator(".col-text").textContent()))
console.log("final order id check:",await page.locator(".col-text").textContent())

}
);





test("E2E Functions",async({page})=>
{
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await page.getByPlaceholder("email@example.com").fill("arjun.gupta756@gmail.com");
    await page.getByPlaceholder("enter your passsword").fill("Arjumeen@1234");
    await page.getByRole("button",{name:"Login"}).click();

    await page.waitForLoadState('networkidle');
   await page.locator(".card-body b").first().waitFor();
   await page.locator(".card-body").filter({hasText:"ADIDAS ORIGINAL"}).getByRole("button",{name:"Add to Cart"}).click();
   await page.getByRole("list").getByRole("button",{name:"Cart"}).click();

   await page.locator("div li").first().waitFor();
   await expect(page.getByText("ADIDAS ORIGINAL")).toBeVisible();
   await page.getByRole("button",{name :"Checkout"}).click();

   await page.getByPlaceholder("Select Country").pressSequentially("ind",{delay:150});
   await page.getByRole("button",{name: "India"}).nth(1).click();

   await page.getByText("PLACE ORDER").click();
 
   await expect(page.getByText("Thankyou for the order.")).toBeVisible();
   
   
   
   await page.pause();


    
});