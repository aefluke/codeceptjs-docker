const { I } = inject();

module.exports = {

  // insert your locators and methods here
    do(){
        I.waitForElement("//h1[contains(.,'Create an account')]");
        I.see("YOUR PERSONAL INFORMATION");
        I.saveScreenshot("ss.png");
    }
}
