const { test, expect } = require('@playwright/test');

test("Playwright Special Locators",async({page})=>
{

    test.setTimeout(60000);
    page.setDefaultTimeout(12000);
await page.goto("https://rahulshettyacademy.com/angularpractice/");

await page.getByLabel("Check me out if you Love IceCreams!").click();
await page.getByLabel("Employed").check();
await page.getByLabel("Gender").selectOption("Male");
await page.getByPlaceholder("password").fill("tet");

await page.getByRole("button",{name:'Submit'}).click({timeout:15000});

const bool = await page.getByText("Success! The Form has been submitted successfully!.").isVisible(); //it wonr fail even if false
console.log(bool);


 await expect(await page.getByText("Success! The Form has been submitted successfully!.")).
 toBeVisible({timeout:10000}); // explicitly for particular assestions
 //since to be visible is outsid;e

await expect(bool).toBeTruthy();

await page.getByRole("link",{name:'Shop'}).click();
await page.locator("app-card").filter({hasText:'Nokia Edge'}).getByRole("button").click();

//await page.pause();
}
)



test("Playwright TestLevel Timeout",async({page})=>
{

    const slowExpect= expect.configure({timeout:9000});
await page.goto("https://rahulshettyacademy.com/angularpractice/");

await page.getByLabel("Check me out if you Love IceCreams!").click();
await page.getByLabel("Employed").check();
await page.getByLabel("Gender").selectOption("Male");
await page.getByPlaceholder("password").fill("tet");

await page.getByRole("button",{name:'Submit'}).click();

const bool = await page.getByText("Success! The Form has been submitted successfully!.").isVisible(); //it wonr fail even if false
console.log(bool);


 await slowExpect(await page.getByText("Success! The Form has been submitted successfully!.")).
 toBeVisible(); // explicitly for particular assestions
 //since to be visible is outside

await slowExpect(bool).toBeTruthy();

await page.getByRole("link",{name:'Shop'}).click();
await page.locator("app-card").filter({hasText:'Nokia Edge'}).getByRole("button").click();

//await page.pause();
}
)