'use strict';
const path = require("path");
const yargs = require("yargs").argv;

exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub', 
    baseUrl: 'https://exadel.com/',

    multiCapabilities: [{
        browserName: 'chrome',
        shardTestFiles: true,
         maxInstances: 2
    }, {
        browserName: 'firefox',
        shardTestFiles: false,
         maxInstances: 2
    }],

    specs: [
        
        `jasmine_e2e/${yargs.spec || "*/*.js"}`
    ],
    onPrepare: function () {
        browser.waitForAngularEnabled(false); 
        console.log("Hello from onPrepare()!");
    },
    beforeLaunch: function () {
        console.log("Hello from beforeLaunch()!");
    },
    onComplete: function () {
        console.log("Hello from onComplete()!");
    },
    SELENIUM_PROMISE_MANAGER: false,

    allScriptsTimeout: 200000,
    getPageTimeout: 100000,
    framework: 'jasmine',
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000
    }
};