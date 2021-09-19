'use strict';

const BasePage = require("./BasePage");

class HomePage extends BasePage{
	constructor (){
		super();

        this.ExadelBlock = element(by.css(".et_pb_section:nth-child(1)"));
        
	};
}

module.exports = HomePage;