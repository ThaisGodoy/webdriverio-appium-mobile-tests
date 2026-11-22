
import FormsPage from '../pageobjects/FormsPage.js';

describe('Testes de Formulários', () => {

    it('CT09 - Preencher e validar campo de texto', async () => {

        await FormsPage.open();

        const texto = 'Teste de automacao mobile';

        await FormsPage.fillText(texto);

        await expect(FormsPage.inputResult)
            .toHaveText(texto);

    });

    it('CT10 - Validar Switch, Dropdown e botão Active', async () => {

        await FormsPage.open();

        await expect(FormsPage.switchResult)
            .toHaveText('Click to turn the switch ON');

        await FormsPage.switchField.click();

        await expect(FormsPage.switchResult)
            .toHaveText('Click to turn the switch OFF');

        await expect(FormsPage.dropdown).toBeDisplayed();

        await FormsPage.selectDropdownOption('Appium is awesome');

        await FormsPage.clickActiveButton();

    });

});
