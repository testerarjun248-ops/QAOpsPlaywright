const{test,expect}=require('@playwright/test')


test.describe.configure({mode: 'parallel'});
//test.describe.configure({mode: 'serial'});

test("@Web popupvalidation",async({page})=>
{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    await page.goto("https://www.google.com");
    await page.goBack();
    await page.goForward();
await page.goBack();

await expect(page.locator("#displayed-text")).toBeVisible();
await page.locator("#hide-textbox").click();
await expect(page.locator("#displayed-text")).toBeHidden();

//await page.pause();

}
)


test("screenshots & visual comparison",async({page})=>
{
await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
await expect(page.locator("#displayed-text")).toBeVisible();
await page.locator("#displayed-text").screenshot({path: 'screenshot11.png'})
await page.locator("#hide-textbox").click();
await page.screenshot({path : 'screenshot1.png'});
await expect(page.locator("#displayed-text")).toBeHidden();

}
);


test('visual',async({page})=>
{
await page.goto("https://flightaware.com/");
await page.locator("[href*='com/account/join']").waitFor();
expect(await page.screenshot()).toMatchSnapshot('landing1.png')
}
);