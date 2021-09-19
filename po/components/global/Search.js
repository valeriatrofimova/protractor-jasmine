const { element } = require("protractor");

class Search {
        constructor() {

                this.Search = element(by.css(".header-cta"));
                this.IconSearch = this.Search.element(by.css("#et_search_icon"));
                this.ContactUs = this.Search.element(by.css("a#contact-h.contact-us__link"))
        }
}

module.exports = Search;