

const base = require('@playwright/test');


exports.customtest = base.test.extend(
{
testDataForOrder:
{
    username : "arjun.gupta756@gmail.com",
password : "Arjumeen@1234",
productName : "ZARA COAT 3"
}    
}

)