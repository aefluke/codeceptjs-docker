Feature('Deneme');

Scenario('test something', (I) => {

    I.amOnPage("/");
    I.click("Sign in");
    I.fillField("email_create", "denemeasd@gmail.com");
    I.click("Create an account");
    I.wait(2);
    I.waitForElement("//h1[contains(.,'Create an account')]");
    I.see("YOUR PERSONAL INFORMATION");
    I.saveScreenshot("ss.png");
});


