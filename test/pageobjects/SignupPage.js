class SignupPage {

    get loginTab() {
        if (driver.isAndroid) {
            return $('~Login');
        } else {
            return $('//XCUIElementTypeButton[@name="Login"]');
        }
    }

    get signupTab() {
        return $('~button-sign-up-container');
    }

    get emailInput() {
        return $('~input-email');
    }

    get passwordInput() {
        return $('~input-password');
    }

    get confirmPasswordInput() {
        return $('~input-repeat-password');
    }

    get signupButton() {
        return $('~button-SIGN UP');
    }

    get successMessage() {
        if (driver.isAndroid) {
            return $('//*[@text="You successfully signed up!"]');
        } else if (driver.isIOS) {
            return $('//*[@label="You successfully signed up!"]');
        }
    }
    get invalidEmailMessage() {
    if (driver.isAndroid) {
        return $('//*[@text="Please enter a valid email address"]');
    } else {
        return $$('//*[@label="Please enter a valid email address"]')[0];
    }
}

get invalidPasswordMessage() {
    if (driver.isAndroid) {
        return $('//*[@text="Please enter at least 8 characters"]');
    } else {
        return $$('//*[@label="Please enter at least 8 characters"]')[0];
    }
}
get mismatchedPasswordMessage() {
    if (driver.isAndroid) {
        return $('//*[@text="Please enter the same password"]');
    } else {
        return $$('//*[@label="Please enter the same password"]')[0];
    }
}

    async open() {
        await this.loginTab.click();
        await this.signupTab.click();
    }

    async signup(email, password, confirmPassword) {
        await this.emailInput.setValue(email);
        await this.passwordInput.setValue(password);
        await this.confirmPasswordInput.setValue(confirmPassword);
        await this.signupButton.click();
    }

    async closeSuccessAlert() {
        if (driver.isAndroid) {
            await $('//*[@text="OK"]').click();
        } else if (driver.isIOS) {
            await $('~OK').click();
        }
    }

    async goToLogin() {
        await $('~button-login-container').click();
    }
}

export default new SignupPage();