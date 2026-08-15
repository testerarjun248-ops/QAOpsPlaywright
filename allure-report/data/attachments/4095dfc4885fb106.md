# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: webApiPart2.spec.js >> @Webst Client App login E2E
- Location: tests\webApiPart2.spec.js:47:1

# Error details

```
Error: expect(received).toBeTruthy()

Received: false
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - navigation [ref=e5]:
    - generic [ref=e7]:
      - link "Automation Automation Practice":
        - /url: ""
        - generic [ref=e8] [cursor=pointer]:
          - heading "Automation" [level=3] [ref=e9]
          - paragraph [ref=e10]: Automation Practice
    - text: 
    - link "Get Shortlisted by Recruiters - Take QA Skill Assessments on TechSmartHire" [ref=e11] [cursor=pointer]:
      - /url: https://techsmarthire.com/
    - list [ref=e12]:
      - listitem [ref=e13] [cursor=pointer]:
        - button " HOME" [ref=e14]:
          - generic [ref=e15]: 
          - text: HOME
      - listitem
      - listitem [ref=e16] [cursor=pointer]:
        - button " ORDERS" [ref=e17]:
          - generic [ref=e18]: 
          - text: ORDERS
      - listitem [ref=e19] [cursor=pointer]:
        - button " Cart" [ref=e20]:
          - generic [ref=e21]: 
          - text: Cart
      - listitem [ref=e22] [cursor=pointer]:
        - button "Sign Out" [ref=e23]:
          - generic [ref=e24]: 
          - text: Sign Out
  - text:    
  - generic [ref=e25]:
    - paragraph [ref=e26]: Home | Search
    - heading "Filters" [level=4] [ref=e28]
    - generic [ref=e29]:
      - textbox "search" [ref=e31]
      - generic [ref=e32]:
        - heading "Price Range" [level=6] [ref=e33]
        - generic [ref=e34]:
          - textbox "Min Price" [ref=e36]
          - textbox "Max Price" [ref=e38]
      - generic [ref=e39]:
        - heading "Categories" [level=6] [ref=e40]
        - generic [ref=e41]: 
        - generic [ref=e43]:
          - checkbox [ref=e44]
          - generic [ref=e45]: fashion
        - generic [ref=e46]:
          - checkbox [ref=e47]
          - generic [ref=e48]: electronics
        - generic [ref=e49]:
          - checkbox [ref=e50]
          - generic [ref=e51]: household
      - generic [ref=e52]:
        - heading "Sub Categories" [level=6] [ref=e53]
        - generic [ref=e54]: 
        - generic [ref=e56]:
          - checkbox [ref=e57]
          - generic [ref=e58]: t-shirts
        - generic [ref=e59]:
          - checkbox [ref=e60]
          - generic [ref=e61]: shirts
        - generic [ref=e62]:
          - checkbox [ref=e63]
          - generic [ref=e64]: shoes
        - generic [ref=e65]:
          - checkbox [ref=e66]
          - generic [ref=e67]: mobiles
        - generic [ref=e68]:
          - checkbox [ref=e69]
          - generic [ref=e70]: laptops
      - generic [ref=e71]:
        - heading "Search For" [level=6] [ref=e72]
        - generic [ref=e73]: 
        - generic [ref=e75]:
          - checkbox [ref=e76]
          - generic [ref=e77]: men
        - generic [ref=e78]:
          - checkbox [ref=e79]
          - generic [ref=e80]: women
  - generic [ref=e81]:
    - generic [ref=e82]:
      - generic [ref=e83]:
        - generic [ref=e84]: Showing 9 results |
        - generic [ref=e85]: User can only see maximum 9 products on a page
      - generic [ref=e86]:
        - generic [ref=e90]:
          - heading "ADIDAS ORIGINAL" [level=5] [ref=e91]
          - generic [ref=e92]: $ 11500
          - button "View" [ref=e94] [cursor=pointer]:
            - generic [ref=e95]: 
            - text: View
          - button " Add To Cart" [ref=e96] [cursor=pointer]:
            - generic [ref=e97]: 
            - text: Add To Cart
        - generic [ref=e101]:
          - heading "ZARA COAT 3" [level=5] [ref=e102]
          - generic [ref=e103]: $ 11500
          - button "View" [ref=e105] [cursor=pointer]:
            - generic [ref=e106]: 
            - text: View
          - button " Add To Cart" [ref=e107] [cursor=pointer]:
            - generic [ref=e108]: 
            - text: Add To Cart
        - generic [ref=e112]:
          - heading "iphone 13 pro" [level=5] [ref=e113]
          - generic [ref=e114]: $ 55000
          - button "View" [ref=e116] [cursor=pointer]:
            - generic [ref=e117]: 
            - text: View
          - button " Add To Cart" [ref=e118] [cursor=pointer]:
            - generic [ref=e119]: 
            - text: Add To Cart
        - generic [ref=e123]:
          - heading "qwerty" [level=5] [ref=e124]
          - generic [ref=e125]: $ 11500
          - button "View" [ref=e127] [cursor=pointer]:
            - generic [ref=e128]: 
            - text: View
          - button " Add To Cart" [ref=e129] [cursor=pointer]:
            - generic [ref=e130]: 
            - text: Add To Cart
        - generic [ref=e134]:
          - heading "car" [level=5] [ref=e135]
          - generic [ref=e136]: $ 150000
          - button "View" [ref=e138] [cursor=pointer]:
            - generic [ref=e139]: 
            - text: View
          - button " Add To Cart" [ref=e140] [cursor=pointer]:
            - generic [ref=e141]: 
            - text: Add To Cart
        - generic [ref=e145]:
          - heading "iPhone QA Max" [level=5] [ref=e146]
          - generic [ref=e147]: $ 98765
          - button "View" [ref=e149] [cursor=pointer]:
            - generic [ref=e150]: 
            - text: View
          - button " Add To Cart" [ref=e151] [cursor=pointer]:
            - generic [ref=e152]: 
            - text: Add To Cart
        - generic [ref=e156]:
          - 'heading "{{productName}}" [level=5] [ref=e157]'
          - generic [ref=e158]: $ 115000
          - button "View" [ref=e160] [cursor=pointer]:
            - generic [ref=e161]: 
            - text: View
          - button " Add To Cart" [ref=e162] [cursor=pointer]:
            - generic [ref=e163]: 
            - text: Add To Cart
        - generic [ref=e167]:
          - heading "Laptop" [level=5] [ref=e168]
          - generic [ref=e169]: $ 11500
          - button "View" [ref=e171] [cursor=pointer]:
            - generic [ref=e172]: 
            - text: View
          - button " Add To Cart" [ref=e173] [cursor=pointer]:
            - generic [ref=e174]: 
            - text: Add To Cart
        - generic [ref=e178]:
          - heading "Laptop" [level=5] [ref=e179]
          - generic [ref=e180]: $ 11500
          - button "View" [ref=e182] [cursor=pointer]:
            - generic [ref=e183]: 
            - text: View
          - button " Add To Cart" [ref=e184] [cursor=pointer]:
            - generic [ref=e185]: 
            - text: Add To Cart
    - list "Pagination" [ref=e190]:
      - listitem [ref=e191]:
        - text: «
        - generic [ref=e192]:
          - text: Previous
          - generic [ref=e193]: page
      - listitem [ref=e194]:
        - generic [ref=e195]: You're on page
        - text: "1"
      - listitem [ref=e196]:
        - generic [ref=e197]:
          - text: Next
          - generic [ref=e198]: page
        - text: »
  - generic [ref=e199]: Design and Developed By - Kunal Sharma
```

# Test source

```ts
  5   | let webContext;
  6   | 
  7   | test.beforeAll(async({browser})=>
  8   | {
  9   |     const context = await browser.newContext();
  10  |     const page = await context.newPage();
  11  |     const email = "anshika@gmail.com";
  12  |     await page.goto("https://rahulshettyacademy.com/client");
  13  |    await page.locator("#userEmail").fill(email);
  14  |    await page.locator("#userPassword").type("Iamking@000");
  15  |    await page.locator("[value='Login']").click();
  16  |    await page.waitForLoadState('networkidle');
  17  |    await page.locator(".card-body b").first().waitFor();
  18  | 
  19  |    await context.storageState({path: 'state.json'});
  20  | 
  21  | 
  22  |    webContext = await browser.newContext({storageState: 'state.json'});
  23  | 
  24  |    
  25  | }
  26  | );
  27  |  
  28  |  
  29  | 
  30  |  
  31  | // test('@Web Client App login', async () => {
  32  | //    //js file- Login js, DashboardPage
  33  | //    const productName = 'zara coat 3';
  34  | //    const page = await webContext.newPage(); //before locator
  35  | //     await page.goto("https://rahulshettyacademy.com/client");
  36  | //    const products = page.locator(".card-body")
  37  | 
  38  | //    const titles = await page.locator(".card-body b").allTextContents();
  39  | //    console.log(titles); 
  40  |  
  41  | // })
  42  | 
  43  | 
  44  | 
  45  | 
  46  | 
  47  | test('@Webst Client App login E2E', async () => {
  48  |    //js file- Login js, DashboardPage
  49  |    const productName = 'ZARA COAT 3';
  50  |    const page = await webContext.newPage(); //before locator
  51  | await page.goto("https://rahulshettyacademy.com/client");
  52  |    const products = page.locator(".card-body");
  53  |    const titles = await page.locator(".card-body b").allTextContents();
  54  |    console.log(titles); 
  55  |    const count = await products.count();
  56  |    for (let i = 0; i < count; ++i) {
  57  |       if (await products.nth(i).locator("b").textContent() === productName) {
  58  |          //add to cart
  59  |          await products.nth(i).locator("text= Add To Cart").click();
  60  |          break;
  61  |       }
  62  |    }
  63  |  
  64  |    await page.locator("[routerlink*='cart']").click();
  65  |    //await page.pause();
  66  |  
  67  |    await page.locator("div li").first().waitFor();
  68  |    const bool = await page.locator("h3:has-text('ZARA COAT 3')").isVisible();
  69  |    expect(bool).toBeTruthy();
  70  |    await page.locator("text=Checkout").click();
  71  | 
  72  |    
  73  |  
  74  |   await page.getByPlaceholder('Select Country').pressSequentially("ind", { delay: 150 }) 
  75  |    const dropdown = page.locator(".ta-results");
  76  |    await dropdown.waitFor();
  77  |    const optionsCount = await dropdown.locator("button").count();
  78  |    for (let i = 0; i < optionsCount; ++i) {
  79  |       const text = await dropdown.locator("button").nth(i).textContent();
  80  |       if (text === " India") {
  81  |          await dropdown.locator("button").nth(i).click();
  82  |          break;
  83  |       }
  84  |    }
  85  |  
  86  |    //expect(page.locator(".user__name [type='text']").first()).toHaveText(email);
  87  |    await page.locator(".action__submit").click();
  88  |    await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
  89  |    const orderId = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
  90  |    console.log(orderId);
  91  |  
  92  |    await page.locator("button[routerlink*='myorders']").click();
  93  |    await page.locator("tbody").waitFor();
  94  |    const rows = await page.locator("tbody tr");
  95  |  
  96  |  
  97  |    for (let i = 0; i < await rows.count(); ++i) {
  98  |       const rowOrderId = await rows.nth(i).locator("th").textContent();
  99  |       if (orderId.includes(rowOrderId)) {
  100 |          await rows.nth(i).locator("button").first().click();
  101 |          break;
  102 |       }
  103 |    }
  104 |    const orderIdDetails = await page.locator(".col-text").textContent();
> 105 |    expect(orderId.includes(orderIdDetails)).toBeTruthy();
      |                                             ^ Error: expect(received).toBeTruthy()
  106 |  
  107 | });
  108 | 
  109 | 
  110 | test("Test 2",async()=>
  111 | {
  112 | const productName = 'ZARA COAT 3';
  113 |    const page = await webContext.newPage(); //before locator
  114 | await page.goto("https://rahulshettyacademy.com/client");
  115 |    const products = page.locator(".card-body");
  116 |    const titles = await page.locator(".card-body b").allTextContents();
  117 |    console.log(titles); 
  118 | }
  119 | );
  120 | 
  121 |  
```