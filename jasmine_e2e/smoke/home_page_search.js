const { browser } = require('protractor');
const HomePage = require('../../po/pages/HomePage');
const homePage = new HomePage();

describe("Search ", () => {

    beforeEach(async () => {
        await browser.manage().deleteAllCookies();
        await browser.get(browser.baseUrl);
    });
    afterEach(async () => {
        console.log("Test finished")
    });

    describe("Search check", () => {
        it("Correct url", async () => {

            await browser.get(browser.baseUrl);
            return expect(browser.getCurrentUrl()).toBe('https://exadel.com/')
        });
        it(`Search are visible`, async () => {

            await browser.actions({ bridge: true }).mouseMove(homePage.Search.IconSearch).perform();

            const elements = homePage.Search.IconSearch;
            return expect(elements.isDisplayed()).toBe(true);
        });
        it(`click search`, async () => {

            await browser.actions({ bridge: true }).mouseMove(homePage.Search.IconSearch).perform();
            await browser.sleep(2000);
            await (await homePage.Search.IconSearch).click();
        });
        it(`Item near search`, async () => {

            await browser.actions({ bridge: true }).mouseMove(homePage.Search.ContactUs).perform();
            await browser.sleep(2000);

            const items = await homePage.Search.ContactUs;
            return expect(items.getText()).toContain("Contact Us");
        });
        it(`click contact us`, async () => {

            await browser.actions({ bridge: true }).mouseMove(homePage.Search.ContactUs).doubleClick().perform();
        });
    })
})