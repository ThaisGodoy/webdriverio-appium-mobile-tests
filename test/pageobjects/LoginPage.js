
class LoginPage {


    get loginTab() {
        if (driver.isAndroid) {
            return $('~Login');
        } else if (driver.isIOS) {
            return $('//XCUIElementTypeButton[@name="Login"]');
        }
    }


    get emailInput() {
        if (driver.isAndroid) {
            return $('~input-email');
        } else if (driver.isIOS) {
            return $('XCUIElementTypeTextField');
        }
    }


    get passwordInput() {
        return $('~input-password');
    }


    get loginButton() {
        return $('~button-LOGIN');
    }


    get successMessage() {
        if (driver.isAndroid) {
            return $('//*[@text="You are logged in!"]');
        } else if (driver.isIOS) {
            return $('//*[@label="You are logged in!"]');
        }
    }
    get invalidPasswordMessage() {
        if (driver.isAndroid) {
            return $('//*[@text="Please enter at least 8 characters"]');
        } else if (driver.isIOS) {
            return $$('//*[@label="Please enter at least 8 characters"]')[0];
        }
    }
    get emptyEmailMessage() {
        if (driver.isAndroid) {
            return $('//*[@text="Please enter a valid email address"]');
        } else if (driver.isIOS) {
            return $$('//*[@label="Please enter a valid email address"]')[0];
        }
    }
    get emptyPasswordMessage() {
        if (driver.isAndroid) {
            return $('//*[@text="Please enter at least 8 characters"]');
        } else if (driver.isIOS) {
            return $$('//*[@label="Please enter at least 8 characters"]')[0];
        }
    }

    async open() {
        await this.loginTab.click();
    }


    async login(email, password) {
        await this.emailInput.setValue(email);
        await this.passwordInput.setValue(password);
        await this.loginButton.click();
    }

    async submitEmptyLogin() {
    await this.emailInput.clearValue();
    await this.passwordInput.clearValue();
    await this.loginButton.click();
}


    async closeSuccessAlert() {
        if (driver.isAndroid) {
            await $('//*[@text="OK"]').click();
        } else if (driver.isIOS) {
            await $('~OK').click();
        }
    }
}

export default new LoginPage();
