// const {DashboardPage}= require('./DashboardPage');
// const {LoginPage}= require('./LoginPage');

// class POManager
// {

//     constructor(page) // single repository holding all pages
//     {
//         this.page = page;
//         this.loginPage = new LoginPage(this.page);
//         this.dashboardPage = new DashboardPage(this.page);
//     }


// getLoginPage()
// {
//     return this.loginPage;
// }

// getDashboardPage()
// {
//     return this.dashboardPage;
// }


// }

// module.exports = {POManager}


import { expect, type Locator, type Page } from '@playwright/test';


import {LoginPage} from './LoginPage';
import {DashboardPage} from './DashboardPage';
import {OrdersHistoryPage} from './OrdersHistoryPage';
import {OrdersReviewPage} from './OrdersReviewPage';
import {CartPage} from './CartPage';
//const {LoginPage} = require('./LoginPage');
//const {DashboardPage} = require('./DashboardPage');
//const {OrdersHistoryPage} = require('./OrdersHistoryPage');
//const {OrdersReviewPage} = require('./OrdersReviewPage');
//const {CartPage} = require('./CartPage');

export class POManager
{
    page: Page;
    loginPage: LoginPage;
dashboardPage : DashboardPage;
ordersHistoryPage : OrdersHistoryPage;
ordersReviewPage : OrdersReviewPage;
cartPage : CartPage;
constructor(page:any)
{
    this.page = page;
    this.loginPage = new LoginPage(this.page);
    this.dashboardPage = new DashboardPage(this.page);
    this.ordersHistoryPage = new OrdersHistoryPage(this.page);
    this.ordersReviewPage = new OrdersReviewPage(this.page);
    this.cartPage = new CartPage(this.page);


}

getLoginPage()
{
    return this.loginPage;
}

getCartPage()
{
    return this.cartPage;
}

getDashboardPage()
{
    return this.dashboardPage;
}
getOrdersHistoryPage()
{
    return this.ordersHistoryPage;
}

getOrdersReviewPage()
{
    return this.ordersReviewPage;
}
}
module.exports = {POManager};