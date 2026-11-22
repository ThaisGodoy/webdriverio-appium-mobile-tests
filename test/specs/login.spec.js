
import LoginPage from '../pageobjects/LoginPage.js';
import users from '../data/users.json' with { type: 'json' };

describe('Testes de Login', () => {

    it('CT01 - Login com credenciais válidas', async () => {

        await LoginPage.open();

        await LoginPage.login(
            users.validUser.email,
            users.validUser.password
        );

        await expect(LoginPage.successMessage).toBeDisplayed();
        await LoginPage.closeSuccessAlert();

    });

    it('CT02 - Senha com menos de 8 caracteres', async () => {

        await LoginPage.open();

        await LoginPage.login(
            users.invalidUser.email,
            users.invalidUser.password
        );

        await expect(LoginPage.invalidPasswordMessage).toBeDisplayed();

    });

    it('CT03 - Campos obrigatórios', async () => {

        await LoginPage.open();
        await LoginPage.submitEmptyLogin();

        await expect(LoginPage.emptyEmailMessage).toBeDisplayed();
        await expect(LoginPage.emptyPasswordMessage).toBeDisplayed();

    });

});
