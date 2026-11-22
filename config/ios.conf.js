const path = require('node:path');
const { config } = require('../wdio.conf.js');

exports.config = {
    ...config,

    capabilities: [{
        platformName: 'iOS',
        'appium:automationName': 'XCUITest',
        'appium:deviceName': 'iPhone 16',
        'appium:platformVersion': '18.0',
        'appium:app': path.resolve(__dirname, '../apps/ios/wdiodemoapp.app')
    }]
};