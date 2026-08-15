const{test,expect}= require('@playwright/test')

test("registrationLocator",async({page})=>
{
await page.goto("https://rahulshettyacademy.com/client");


await page.locator(".login-wrapper-footer-text").click();
await page.waitForURL("**auth/register**");
console.log(await page.title());
await expect(await page.title()).toContain("Shop");

await page.locator("#firstName").fill("Meenakshi");
await page.locator("#lastName").fill("Gupta");
await page.locator("#userEmail").fill("meenakshigupta180312@gmail.com");
await page.locator("#userMobile").fill("9179072730");
await page.locator("[formcontrolname='occupation']").selectOption("2: Student");
await page.locator("[value='Female']").click();
await page.locator("#userPassword").fill("Meen@123456");
await page.locator("#confirmPassword").fill("Meen@123456");
await page.locator("[type='checkbox']").check();
await page.locator("#login").click();

//if not wanna use waitfor, simple use assertion as to be visible waits for load


}
)
;


test("registrationFunctions",async({page})=>
{
await page.goto("https://rahulshettyacademy.com/client");
//await expect(page.getByRole('link', { name: 'Register here' })).toBeVisible();
//await page.getByRole("link",{name:"Register here"}).click();

await page.getByText("Register here").click();
//await page.waitForURL("**auth/register**");
await expect(await page.title()).toContain("Shop");
await page.getByLabel("First Name").fill("Meenakshi");
await page.getByLabel("Last Name").fill("Gupta");
await page.getByPlaceholder("email@example.com").fill("meenakshi11118012@gmail.com");
await page.getByPlaceholder("enter your number").fill("9179072730");
//await page.getByLabel("Occupation").selectOption("2: Student"); no association
await page.locator("[formcontrolname='occupation']").selectOption("2: Student");
await page.locator("[value='Female']").click();
await page.getByPlaceholder("Passsword").nth(0).fill("Meenu@13456");
await page.getByPlaceholder("Confirm Passsword").fill("Meenu@13456");
await page.locator("[type='checkbox']").check();
await page.locator("#login").click();

// await page.locator("text=Account Created Successfully").waitFor();
// await expect(await page.getByText("Account Created Successfully")).toBeVisible();
// const out =  await page.getByText("Account Created Successfully").isVisible();

// //if not wanna use waitfor, simple use assertion as to be visible waits for load
// console.log("Output is:",out);

}
)
;


