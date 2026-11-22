
class FormsPage {

    get formsTab() {
        return $('~Forms');
    }

    get pageTitle() {
        return driver.isIOS
            ? $('//*[@label="Form components"][@accessible="true"]')
            : $('//*[@text="Form components"]');
    }

    get inputField() {
        return $('~text-input');
    }

    get inputResult() {
        return $('~input-text-result');
    }

    get switchField() {
        return $('~switch');
    }

    get switchResult() {
        return $('~switch-text');
    }

    get dropdown() {
        return $('~Dropdown');
    }

    get dropdownArrow() {
        return $('~dropdown-chevron');
    }

    get dropdownPicker() {
        return $('//XCUIElementTypePickerWheel');
    }

    get dropdownDone() {
        return $('~done_button');
    }

    get dropdownValue() {
        return driver.isIOS
            ? $('//XCUIElementTypeTextField[@name="text_input"]')
            : $('//*[@text="Appium is awesome"]');
    }

    get activeButton() {
        return driver.isIOS
            ? $('//XCUIElementTypeStaticText[@name="Active" and @accessible="true"]')
            : $('~button-Active');
    }

    async open() {

        if (driver.isIOS) {

            const tecladoAberto = await driver.isKeyboardShown();

            if (tecladoAberto) {
                await driver.execute('mobile: tap', {
                    x: 200,
                    y: 100
                });
            }
        }

        await this.formsTab.waitForDisplayed({
            timeout: 10000
        });

        await this.formsTab.click();

        await expect(this.pageTitle).toBeDisplayed();
    }

    async fillText(texto) {

        await this.inputField.waitForDisplayed({
            timeout: 10000
        });

        await this.inputField.setValue(texto);
    }

    async selectDropdownOption(opcao) {

        if (driver.isIOS) {

            await this.dropdownArrow.click();

            await this.dropdownPicker.waitForDisplayed({
                timeout: 10000
            });

            await this.dropdownPicker.setValue(opcao);

            await this.dropdownDone.click();

            await this.dropdownPicker.waitForDisplayed({
                reverse: true,
                timeout: 10000
            });

            await browser.waitUntil(async () => {

                const valor = await this.dropdownValue
                    .getAttribute('value');

                return valor === opcao;

            }, {
                timeout: 10000,
                interval: 500,
                timeoutMsg: `Dropdown não apresentou a opção "${opcao}"`
            });

        } else {

            // Seleção no Android
            await this.dropdown.click();

            const option = $(`//*[@text="${opcao}"]`);

            await option.waitForDisplayed({
                timeout: 10000
            });

            await option.click();

            await expect(this.dropdownValue).toBeDisplayed();
        }
    }

    async clickActiveButton() {

        if (driver.isAndroid) {
            await this.activeButton.scrollIntoView();
        }

        await this.activeButton.waitForDisplayed({
            timeout: 10000,
            timeoutMsg: 'Botão Active não ficou visível'
        });

        await this.activeButton.click();
    }
}

export default new FormsPage();
