const{test,expect} =require('@playwright/test')

test("First Login",async({browser,page})=>
{

    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await page.locator("input#userEmail").fill("anshika@gmail.com");
    await page.locator("[type='password']").fill("Iamking@000");
    await page.locator("#login").click();
const product = page.locator(".card-body b");
const adidasloc=page.locator(".card-body b").first();

    console.log(await page.title());
    //await expect(page).toHaveTitle("Let's Shop");


    const adidas = await adidasloc.textContent();
    //const girl = await page.locator(".card-body b").nth(1).textContent();
    //console.log(girl);

  await page.waitForLoadState('networkidle');

  await product.nth(3).waitFor();
const allList = await product.allTextContents();
console.log(allList);

//await expect(adidas).toContainText('ADIDAS'); tocontainstext works on locator not string
console.log(adidas);

}
);



test("UI Tests Practice",async ({browser})=>
{
const context = await browser.newContext();
const page = await context.newPage();

await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
const username = page.locator("#username");
const pwd = page.locator("#password");
const signin = page.locator("[type='submit']");
const radio = page.locator(".radiotextsty");
const dropdown =page.locator("select.form-control");
const blink = page.locator("[href*= 'rahulshetty']"); // key me * aata if partial value

await username.fill("");
await pwd.fill("");
await username.fill("rahulshettyacademy");
await pwd.fill("Learning@830$3mK2");

await radio.nth(1).click();
await page.locator("#okayBtn").click();

await dropdown.selectOption("consult"); // NO CLICK HERE


await expect(await radio.nth(1)).toBeChecked();
console.log(await radio.nth(1).isChecked());

await page.locator("#terms").check();

await expect(blink).toHaveAttribute("class","blinkingText");
await signin.click();

await page.waitForURL("**angularpractice**");
console.log(await page.title());

}
);


test("ChildWindow",async ({browser})=>
{
const context = await browser.newContext();
const page = await context.newPage();
await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
const username = page.locator("#username");
const blink = page.locator("[href*= 'rahulshetty']");

//await context.waitForEvent('page');
//await blink.click();
//both need to be asynchronous at same time, and both needs to be complete

const[page2] = await Promise.all(
[ context.waitForEvent('page'),
 blink.click()]
)

const text = await page2.locator(".im-para.red").textContent();
const part = text.split("@");

const part2 = part[1].split(" ");
const final = part2[0];

console.log(final);

await username.fill("");
await username.fill(final);

console.log(await username.inputValue());

await expect(username).toHaveValue("rahulshettyacademy.com"); // EXACT VALUE
await expect( await username.inputValue()).toContain("rahul");
//inputValue() returns a Promise[] and toContain() expects a string.

}
);




test("Register and Login",async({page})=>
{
await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
await page.locator(".login-wrapper-footer-text").click();

await page.waitForURL("**https://rahulshettyacademy.com/client**");
console.log(await page.title());

//await expect(await page.title()).toContain("Shop");
await expect(page).toHaveTitle(/Shop/); //  this also valid

await page.locator("[type='firstName']").fill("Arjun");
await page.locator("[type='lastName']").fill("Gupta");
await page.locator("[type='email']").fill("arjungupta.7567@gmail.com");
await page.locator("#userMobile").fill("7303116904");
await page.locator("[formcontrolname = 'occupation']").selectOption("3: Engineer");
await page.locator("[formcontrolname='gender']").nth(0).click();
await page.locator("#userPassword").fill("Arjumeen@123456");
await page.locator("#confirmPassword").fill("Arjumeen@123456");
await page.locator("[type='checkbox']").check();
await page.locator("[type='submit']").click();

//console.log(await page.locator(".headcolor").textContent()); won't wait for locate

await page.locator(".headcolor").waitFor();
console.log(await page.locator(".headcolor").textContent());

await expect(page.locator(".headcolor")).toContainText("Account Created");

await page.locator(".btn.btn-primary").click();

await page.waitForURL("***auth/login**");

await page.locator("#userEmail").fill("");
await page.locator("#userEmail").fill("arjungupta.7567@gmail.com");
await page.locator("#userPassword").fill("");
await page.locator("#userPassword").fill("Arjumeen@123456");
await page.locator("#login").click();


await page.waitForURL("**dashboard/dash**");

await expect(await page.title()).toContain("Shop");
await expect(page).toHaveTitle(/Shop/);

await page.pause();


}
);


test("E2E Test Static",async({page})=>
{
await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
await page.locator("#userEmail").fill("");
await page.locator("#userEmail").fill("arjun.gupta756@gmail.com");
await page.locator("#userPassword").fill("");
await page.locator("#userPassword").fill("Arjumeen@1234");
await page.locator("#login").click();

await page.waitForURL("**dashboard/dash**");
await page.locator(".card-body b").nth(0).waitFor();
console.log(await page.locator(".card-body b").nth(0).textContent()); 
// this worked as upar wait kr lia load tak


await page.locator("button.btn.w-10.rounded").nth(1).click();
await page.locator("[routerlink='/dashboard/cart']").click();
await page.waitForURL("**dashboard/cart**");
await page.locator(".btn.btn-primary").nth(1).click();

await page.locator(".input.txt").nth(0).fill("4542 9931 9292 2211");
await page.locator(".input.txt").nth(1).fill("1321");
await page.locator(".input.txt").nth(2).fill("Arjun Gupta");
await page.locator(".input.ddl").first().selectOption({label: "03"});
await page.locator(".input.ddl").last().selectOption({label: "22"});
await page.locator("[name= 'coupon']").fill("");
await page.locator("[name= 'coupon']").fill("rahulshettyacademy");

await page.locator("[type='submit']").click();

await page.locator(".mt-1.ng-star-inserted").waitFor();
console.log(await page.locator(".mt-1.ng-star-inserted").textContent());
await expect(page.locator(".mt-1.ng-star-inserted")).toContainText("Applied");

//await page.locator(".input.txt.text-validated").nth(1).waitFor();
//as already present at time of form load so yha wait for not needed
//console.log(await page.locator(".input.txt.text-validated").nth(1).textContent());
//text content won't work for user inputted, input value
console.log(await page.locator(".input.txt.text-validated").nth(1).inputValue());


//await page.locator("[placeholder = 'Select Country']").fill("India");

//await page.locator(".ng-star-inserted").nth(6).waitFor();
//await page.locator(".ng-star-inserted").nth(6).click();

await page.getByPlaceholder("Select Country").pressSequentially("ind");
 
   await page.getByRole("button",{name :"India"}).nth(1).click();
   await page.getByText("PLACE ORDER").click();
 

await page.waitForURL("**dashboard/thanks**");

console.log("Order Number:",await page.locator("label.ng-star-inserted").textContent());


//await page.pause();

}
);




test("E2E Test Dynamic",async({page})=>

{
await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
await page.locator("#userEmail").fill("");
await page.locator("#userEmail").fill("arjun.gupta756@gmail.com");
await page.locator("#userPassword").fill("");
await page.locator("#userPassword").fill("Arjumeen@1234");
await page.locator("#login").click();

await page.waitForURL("**dashboard/dash**"); //not always helpful
console.log(await page.title());
const productname = "ZARA COAT 3";
await page.locator(".card-body").first().waitFor();
const allProducts = await page.locator(".card-body");
const allTitles = await page.locator(".card-body").allTextContents();
console.log(allTitles);
const count = await allProducts.count();


for(let i=0; i< count; ++i)
{
  if (await allProducts.nth(i).locator("b").textContent() === productname)
  {
    await allProducts.nth(i).locator("text= Add to Cart").click();
    break;
  }
}

console.log(productname);
console.log(`h3:has-text("${productname}")`);
await page.locator("[routerlink*='cart']").click();
await page.locator("div li").first().waitFor();
console.log(await page.title());

//const bool = await page.locator("h3:has-text(productname)").isVisible(); will treat as string
const bool = await page.locator(`h3:has-text("${productname}")`).isVisible();
const bool1 = await page.locator("h3:has-text('ZARA COAT 3')").isVisible();

expect(bool).toBeTruthy();
expect(bool1).toBeTruthy();

console.log(bool);
console.log(bool1);

await page.locator("text=Checkout").click();
await page.locator("[placeholder*='Country']").waitFor();
await page.locator("[placeholder*='Country']").pressSequentially("ind",{delay:150});

const dropdown =  page.locator(".ta-results");
await dropdown.waitFor();

const  dropdowncount = await dropdown.locator("button").count();

for(let i=0;i<dropdowncount;i++)
{
  if(await dropdown.locator("button").nth(i).textContent()===" India")
  {
    await dropdown.locator("button").nth(i).click();
    break;
  }
}

const mail = await page.locator(".user__name [type='text']").first().textContent();
//await expect(mail.toContainText("arjun.gupta@756@gmail.com")); as mail not locator

await expect(mail).toContain("arjun");

console.log(mail);

 await page.locator(".action__submit").click();
  await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
  const orderId = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
   console.log(orderId);


    await page.locator("button[routerlink*='myorders']").click();

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
  }
);


test("E2ETestOtherWay",async({page})=>
{
await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
await page.getByPlaceholder("email@example.com").fill("arjun.gupta756@gmail.com");
await page.getByPlaceholder("enter your passsword").fill("Arjumeen@1234");
await page.getByRole("button",{name:'Login'}).click();


//await page.locator(".card-body").waitFor();// THIS FAILING AS 3 ELEMENT
await page.locator(".card-body").first().waitFor();

await page.locator(".card-body").filter({hasText:'zARA'}).
getByRole("button",{name:'Add to Cart'}).click();

//await page.getByRole("button",{name:"Cart"}).click(); this wont work as Cart as regular expression will be searched entire page
await page.getByRole("listitem").getByRole("button",{name:"Cart"}).click();

await page.locator("div li").first().waitFor();
await expect(page.getByText("ZARA COAT 3")).toBeVisible();
//await page.getByText("Checkout").waitFor();this also fine
//await page.getByText("Checkout").click(); this also fine
 await page.getByRole("button",{name :"Checkout"}).click();

 await page.getByPlaceholder("Select Country").pressSequentially("ind",{delay:150});
 await page.getByRole("button",{name:"India"}).nth(1).click();
await page.getByText("PLACE ORDER").click();
console.log("Before Place Order");
 await expect (page.getByText("Thankyou for the order.")).toBeVisible();

}
);



test("newMethods",async({page})=>
{
await page.goto("https://rahulshettyacademy.com/angularpractice/");
//await page.getByLabel("Name").fill("arjun");
//await page.getByRole("textbox",{name:"Name"}).fill("Arjun");
await page.locator("[name='name']").nth(0).fill("Arjun");
await page.getByPlaceholder("Password").fill("");
await page.getByPlaceholder("Password").fill("Arjumeen@1221222233");
await page.getByLabel("Check me").check();
await page.getByLabel("Gender").selectOption("Female");
await page.getByLabel("Student").click();
await page.getByRole("button",{name:'Submit'}).click();

await expect(await page.getByText("Success! The Form has been submitted successfully!")).toBeVisible();

//await page.pause();
}
)