const { browser } = require('protractor');
const HomePage = require('../../po/pages/HomePage');
const homePage = new HomePage()
describe("Header ", () => {

    beforeEach(async () => {
        await browser.manage().deleteAllCookies();
        await browser.get(browser.baseUrl);
    });


    describe("News items check", () => {
        
        
        it(`News items are visible`, async () => {

            await browser.actions({ bridge:true}).mouseMove(homePage.Header.NewsButton).perform();

            const elements = homePage.Header.NewsItems;
            return expect(elements.count()).toBe(6);
        });
        it(`First item in news is blog`, async () => {
        
            await browser.actions({ bridge:true}).mouseMove(homePage.Header.NewsButton).perform();
            await browser.sleep(2000);

            const elementNumber = await homePage.Header.NewsItems;
            return expect(elementNumber[0].getText()).toContain("Blog");
        });
        it(`click Blog`, async () => {
            await browser.actions({ bridge:true}).mouseMove(homePage.Header.NewsButton).perform();
            await browser.sleep(2000);

            await(await homePage.Header.NewsItems)[0].click();
            const pageTitle = await browser.getTitle();

            return expect(pageTitle).toEqual('Technical Articles. Tech Tips. | Exadel Blog');

        });
    });
});
