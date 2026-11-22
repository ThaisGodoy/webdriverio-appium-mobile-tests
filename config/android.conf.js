const path = require('node:path');
const { config } = require('../wdio.conf.js');

exports.config = {
    ...config,

    capabilities: [{
        platformName: 'Android',
        'appium:automationName': 'UiAutomator2',
        'appium:deviceName': 'Pixel_5',
        'appium:avd': 'Pixel_5',
        'appium:app': path.resolve(__dirname, '../apps/android/android.wdio.native.app.v2.2.0.apk')
    }]
};