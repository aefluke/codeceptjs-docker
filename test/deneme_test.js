Feature('Deneme');

Scenario('test something', (I, homePage) => {

    I.amOnPage("/");
    I.click("Sign in");
    I.fillField("email_create", "denemeasd@gmail.com");
    I.click("Create an account");
    I.wait(2);
    homePage.do();
});


