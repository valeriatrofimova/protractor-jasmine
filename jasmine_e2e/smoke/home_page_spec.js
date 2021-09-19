const { browser } = require('protractor');

const driver = require("selenium-webdriver")
describe("HOME PAGE", () => {

    beforeEach(async () => {
        await browser.manage().deleteAllCookies();
        await browser.get(browser.baseUrl);
    });

    describe("PAGE TITLE AND URL VERIFICATION", () => {
        it(`verify that Home Page url is equal to the ${browser.baseUrl}`, async () => {
            const url = await browser.getCurrentUrl();

            return expect(url).toEqual(browser.baseUrl);
        });

        it(`verify that Home Page title is equal to the 'Exadel | Global Enterprise Software & Tech Solutions'`, async () => {
            const pageTitle = await browser.getTitle();

            return expect(pageTitle).toEqual('Enterprise Software Development Company | Exadel');
        });
    });
 
});
