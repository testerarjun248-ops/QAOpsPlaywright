

Feature: Ecommerce Validations

@Regression
  Scenario: Placing the order
  Given a login to Ecommerce application with "arjun.gupta756@gmail.com" and "Arjumeen@1234"
    When Add "ZARA COAT 3" to Cart
    Then Verify "ZARA COAT 3" is displayed in the Cart
    When Enter valid details and place the order
    Then Verify order present in Order History Page


Scenario Outline:
Given a login to Ecommerce2 application with "<username>" and "<password>"
Then Verify error displayed

Examples:
|username|password|
|a123|Arju@1234|
|b123|B@1234|