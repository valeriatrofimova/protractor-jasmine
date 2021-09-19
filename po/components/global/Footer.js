'use strict';

class Footer {
        constructor() {

                this.Footer = element(by.css("footer#main-footer"));

                this.AboutUs = this.Footer.element(by.css('.menu-item-197188'));
                this.News = this.Footer.element(by.css('.menu-item-191665'));

     
                this.AboutItems = this.AboutUs.$('.sub-menu li');
                this.NewsItems = this.News.$$('.sub-menu li');
        };
}

module.exports = Footer;