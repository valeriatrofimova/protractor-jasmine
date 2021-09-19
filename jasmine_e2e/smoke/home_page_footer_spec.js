const { browser } = require('protractor');
const EC = protractor.ExpectedConditions;
const HomePage = require('../../po/pages/HomePage');
const homePage = new HomePage();

describe("FOOTER ", () => {

    beforeEach(async () => {
        await browser.manage().deleteAllCookies();
        await browser.get(browser.baseUrl);
    });


    describe("News items check", () => {
        it(`News items link is clickable`, async () => {

            const elements = homePage.Footer.AboutItems;
            browser.wait(EC.elementToBeClickable(elements), 5000);

        });
        
    });
});
