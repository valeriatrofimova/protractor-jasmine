'use strict';

class Header{
	constructor (){

        this.Header = element(by.css("header#main-header"));

        this.HeaderLogo = this.Header.element(by.css('.logo-container'));

        this.ServicesButton = this.Header.element(by.css('#menu-item-192350'));
        this.IndustriesButton = this.Header.element(by.css('#menu-item-183744'));
        this.HowWeWorkButton = this.Header.element(by.css('#menu-item-196509'));
        this.NewsButton = this.Header.$('#menu-item-191665');
        
       

        this.NewsItems = element.all(by.css('#menu-item-191665 li.ubermenu-item span'));
        this.WorkOur = element.all(by.css("#menu-item-203535 li.ubermenu-item span"))

	};
}

module.exports = Header;