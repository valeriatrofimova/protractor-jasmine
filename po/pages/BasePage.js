'use strict';

const Header = require('../components/global/Header');
const Footer = require('../components/global/Footer');
const Search = require('../components/global/Search');

class BasePage {
        constructor() {
                this.Search = new Search();
                this.Header = new Header();
                this.Footer = new Footer();
        };
}

module.exports = BasePage;