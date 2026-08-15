

Feature: Ecommerce Validations


//@Validation
//Scenario:Placing the Order
//Given a login to Ecommerce2 application with "arjun.gupta756@gmail.com" and "Arjumeen@1234"
//Then Verify error displayed


Scenario Outline:
Given a login to Ecommerce2 application with "<username>" and "<password>"
Then Verify error displayed

Examples:
|username|password|
|a123|Arju@1234|
|b123|B@1234|


