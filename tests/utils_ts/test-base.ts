

import{test as baseTest} from '@playwright/test'


interface TestDataforOrder
{
    username : string;
    password: string;
    productName: string;
};

export const customtest = baseTest.extend<{testDataForOrder:TestDataforOrder}>(
{
testDataForOrder:
{
    username : "arjun.gupta756@gmail.com",
password : "Arjumeen@1234",
productName : "ZARA COAT 3"
}    
}

)
