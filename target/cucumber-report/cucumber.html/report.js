$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("BankTest.feature");
formatter.feature({
  "line": 1,
  "name": "XYZ Bank Test",
  "description": "",
  "id": "xyz-bank-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6972946400,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "I am On Homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 6,
  "name": "Bank Manager should add customer successfully",
  "description": "",
  "id": "xyz-bank-test;bank-manager-should-add-customer-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@sanity"
    },
    {
      "line": 5,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I click On Bank Manager Login Tab",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click On Add Customer Tab",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter First Name",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I enter LastName",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter PostCode",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click On Add Customer Button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should verify message \"Customer added successfully\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on ok button on popup.",
  "keyword": "Then "
});
formatter.match({
  "location": "BankTestSteps.iClickOnBankManagerLoginTab()"
});
formatter.result({
  "duration": 384495300,
  "status": "passed"
});
formatter.match({
  "location": "BankTestSteps.iClickOnAddCustomerTab()"
});
formatter.result({
  "duration": 979330300,
  "status": "passed"
});
formatter.match({
  "location": "BankTestSteps.iEnterFirstName()"
});
formatter.result({
  "duration": 415211300,
  "status": "passed"
});
formatter.match({
  "location": "BankTestSteps.iEnterLastName()"
});
formatter.result({
  "duration": 118982200,
  "status": "passed"
});
formatter.match({
  "location": "BankTestSteps.iEnterPostCode()"
});
formatter.result({
  "duration": 133293400,
  "status": "passed"
});
formatter.match({
  "location": "BankTestSteps.iClickOnAddCustomerButton()"
});
formatter.result({
  "duration": 117212400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Customer added successfully",
      "offset": 25
    }
  ],
  "location": "BankTestSteps.iShouldVerifyMessage(String)"
});
formatter.result({
  "duration": 54978800,
  "status": "passed"
});
formatter.match({
  "location": "BankTestSteps.iClickOnOkButtonOnPopup()"
});
formatter.result({
  "duration": 41892200,
  "status": "passed"
});
formatter.after({
  "duration": 939448500,
  "status": "passed"
});
formatter.before({
  "duration": 4027225600,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "I am On Homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 17,
  "name": "Bank Manager should open account successfully",
  "description": "",
  "id": "xyz-bank-test;bank-manager-should-open-account-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 16,
      "name": "@smoke"
    },
    {
      "line": 16,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "I click On Bank Manager Login Tab",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I click On Open Account Tab",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I Search customer that is created first",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I Select currency Pound",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on process button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I should verify message Account created successfully",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I click on ok button on popup.",
  "keyword": "Then "
});
formatter.match({
  "location": "BankTestSteps.iClickOnBankManagerLoginTab()"
});
formatter.result({
  "duration": 451979500,
  "status": "passed"
});
formatter.match({
  "location": "BankTestSteps.iClickOnOpenAccountTab()"
});
formatter.result({
  "duration": 540685600,
  "status": "passed"
});
formatter.match({
  "location": "BankTestSteps.iSearchCustomerThatIsCreatedFirst()"
});
formatter.result({
  "duration": 390391400,
  "status": "passed"
});
formatter.match({
  "location": "BankTestSteps.iSelectCurrencyPound()"
});
formatter.result({
  "duration": 136687800,
  "status": "passed"
});
formatter.match({
  "location": "BankTestSteps.iClickOnProcessButton()"
});
formatter.result({
  "duration": 88104100,
  "status": "passed"
});
formatter.match({
  "location": "BankTestSteps.iShouldVerifyMessageAccountCreatedSuccessfully()"
});
formatter.result({
  "duration": 31775300,
  "status": "passed"
});
formatter.match({
  "location": "BankTestSteps.iClickOnOkButtonOnPopup()"
});
formatter.result({
  "duration": 10442800,
  "status": "passed"
});
formatter.after({
  "duration": 896219300,
  "status": "passed"
});
formatter.before({
  "duration": 3808224300,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "I am On Homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 27,
  "name": "As a Customer, I should login and log out successfully",
  "description": "",
  "id": "xyz-bank-test;as-a-customer,-i-should-login-and-log-out-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 26,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "I click on Customer Login Tab",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "I search customer that i created.",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I click on Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I should verify Logout Tab displayed.",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "I click on Logout",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I should verify Your Name text displayed.",
  "keyword": "Then "
});
formatter.match({
  "location": "BankTestSteps.iClickOnCustomerLoginTab()"
});
formatter.result({
  "duration": 793557000,
  "status": "passed"
});
formatter.match({
  "location": "BankTestSteps.iSearchCustomerThatICreated()"
});
formatter.result({
  "duration": 605408200,
  "status": "passed"
});
formatter.match({
  "location": "BankTestSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 99205000,
  "status": "passed"
});
formatter.match({
  "location": "BankTestSteps.iShouldVerifyLogoutTabDisplayed()"
});
formatter.result({
  "duration": 334835300,
  "status": "passed"
});
formatter.match({
  "location": "BankTestSteps.iClickOnLogout()"
});
formatter.result({
  "duration": 186344500,
  "status": "passed"
});
formatter.match({
  "location": "BankTestSteps.iShouldVerifyYourNameTextDisplayed()"
});
formatter.result({
  "duration": 41441200,
  "status": "passed"
});
formatter.after({
  "duration": 830020300,
  "status": "passed"
});
formatter.before({
  "duration": 4012577100,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "I am On Homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 36,
  "name": "As a Customer, I should Deposit money successfully",
  "description": "",
  "id": "xyz-bank-test;as-a-customer,-i-should-deposit-money-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 35,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 37,
  "name": "I click on Customer Login Tab",
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "I search customer that i created.",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I click on Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I click on Deposit Tab",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I Enter amount 100",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "I click on Deposit Button",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I should verify message Deposit Successful",
  "keyword": "Then "
});
formatter.match({
  "location": "BankTestSteps.iClickOnCustomerLoginTab()"
});
formatter.result({
  "duration": 750225600,
  "status": "passed"
});
formatter.match({
  "location": "BankTestSteps.iSearchCustomerThatICreated()"
});
formatter.result({
  "duration": 816130000,
  "status": "passed"
});
formatter.match({
  "location": "BankTestSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 97107600,
  "status": "passed"
});
formatter.match({
  "location": "BankTestSteps.iClickOnDepositTab()"
});
formatter.result({
  "duration": 456206900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 15
    }
  ],
  "location": "BankTestSteps.iEnterAmount(int)"
});
formatter.result({
  "duration": 427376600,
  "status": "passed"
});
formatter.match({
  "location": "BankTestSteps.iClickOnDepositButton()"
});
formatter.result({
  "duration": 124897700,
  "status": "passed"
});
formatter.match({
  "location": "BankTestSteps.iShouldVerifyMessageDepositSuccessful()"
});
formatter.result({
  "duration": 54605700,
  "status": "passed"
});
formatter.after({
  "duration": 918103400,
  "status": "passed"
});
formatter.before({
  "duration": 4019357500,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "I am On Homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 46,
  "name": "As a Customer, I should Withdraw money successfully",
  "description": "",
  "id": "xyz-bank-test;as-a-customer,-i-should-withdraw-money-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 45,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 47,
  "name": "I click on Customer Login Tab",
  "keyword": "Given "
});
formatter.step({
  "line": 48,
  "name": "I search customer that i created.",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "I click on Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "click on Withdrawal Tab",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "I Enter amount now 50",
  "keyword": "Then "
});
formatter.step({
  "line": 52,
  "name": "I click on Withdrawal Button",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "I should verify message Transaction Successful",
  "keyword": "Then "
});
formatter.match({
  "location": "BankTestSteps.iClickOnCustomerLoginTab()"
});
formatter.result({
  "duration": 232193500,
  "status": "passed"
});
formatter.match({
  "location": "BankTestSteps.iSearchCustomerThatICreated()"
});
formatter.result({
  "duration": 391797700,
  "status": "passed"
});
formatter.match({
  "location": "BankTestSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 83062900,
  "status": "passed"
});
formatter.match({
  "location": "BankTestSteps.clickOnWithdrawalTab()"
});
formatter.result({
  "duration": 335826500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 19
    }
  ],
  "location": "BankTestSteps.iEnterAmountNow(int)"
});
formatter.result({
  "duration": 336912900,
  "status": "passed"
});
formatter.match({
  "location": "BankTestSteps.iClickOnWithdrawalButton()"
});
formatter.result({
  "duration": 120880200,
  "status": "passed"
});
formatter.match({
  "location": "BankTestSteps.iShouldVerifyMessageTransactionSuccessful()"
});
formatter.result({
  "duration": 64011500,
  "status": "passed"
});
formatter.after({
  "duration": 896066400,
  "status": "passed"
});
});