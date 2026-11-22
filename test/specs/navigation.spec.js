
import NavigationPage from '../pageobjects/NavigationPage.js';

describe('Testes de Navegação', () => {



it('CT07 - Validar navegação entre as abas', async () => {

    const abas = [
        'Home',
        'Webview',
        'Login',
        'Forms',
        'Swipe',
        'Drag'
    ];

    for (const nome of abas) {

        console.log(`Abrindo aba: ${nome}`);

        const botao = await $(`~${nome}`);

        await expect(botao).toBeDisplayed();
        await botao.click();

        if (driver.isAndroid) {

            await expect(botao).toHaveAttribute('selected', 'true');

        } else {

            await driver.waitUntil(
                async () => {
                    const selected = await botao.getAttribute('selected');
                    const value = await botao.getAttribute('value');

                    return selected === 'true' || value === '1';
                },
                {
                    timeout: 5000,
                    timeoutMsg: `A aba ${nome} não ficou selecionada no iOS`
                }
            );

        }

        console.log(`Aba selecionada: ${nome}`);
    }

});



    it('CT08 - Validar limite de abas favoritas', async () => {

        await NavigationPage.openMenu();

        const favoritos = [
            'Webview', 'Login', 'Forms', 'Swipe', 'Drag'
        ];

        for (const menu of favoritos) {

            const estrela = await $(
                `~side-menu-star-${menu.toLowerCase()}`
            );

            if (driver.isIOS) {
                await expect(estrela).toHaveAttribute(
                    'label',
                    `Remove ${menu} from tab bar`
                );
            } else {
                await expect(estrela).toBeDisplayed();
            }
        }

        await NavigationPage.permissionsStar.click();

        if (driver.isIOS) {

            const alerta = await $$(
                '//*[contains(@label, "Tab bar full")]'
            );

            expect(alerta.length).toBeGreaterThan(0);
            await expect(alerta[0]).toBeDisplayed();

            await driver.acceptAlert();

        } else {

            const alerta = await $('//*[@text="Tab bar full"]');

            await expect(alerta).toBeDisplayed();

            await $('//*[@text="OK"]').click();
        }

        if (driver.isIOS) {

            await expect(NavigationPage.permissionsStar)
                .toHaveAttribute(
                    'label',
                    'Add Permissions to tab bar'
                );

        } else {

            await expect($('~Permissions')).not.toBeDisplayed();

        }

    });

});
