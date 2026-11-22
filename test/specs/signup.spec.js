
import SignupPage from '../pageobjects/SignupPage.js';
import LoginPage from '../pageobjects/LoginPage.js';
import users from '../data/users.json' with { type: 'json' };

describe('Testes de Cadastro', () => {

    it('CT04 - Cadastro válido seguido de login', async () => {

        const email = users.signupUser.email;
        const senha = users.signupUser.password;

        await SignupPage.open();

        await SignupPage.signup(
            email,
            senha,
            senha
        );

        await expect(SignupPage.successMessage).toBeDisplayed();

        await SignupPage.closeSuccessAlert();

        await SignupPage.goToLogin();

        await LoginPage.login(email, senha);

        await expect(LoginPage.successMessage).toBeDisplayed();

        await LoginPage.closeSuccessAlert();

    });

    it('CT05 - Cadastro com dados inválidos', async () => {

        await SignupPage.open();

        await SignupPage.signup(
            users.invalidSignup.email,
            users.invalidSignup.password,
            users.invalidSignup.confirmPassword
        );

        await expect(SignupPage.invalidEmailMessage).toBeDisplayed();
        await expect(SignupPage.invalidPasswordMessage).toBeDisplayed();

    });

    it('CT06 - Cadastro com senhas diferentes', async () => {

        await SignupPage.open();

        await SignupPage.signup(
            users.mismatchedPasswords.email,
            users.mismatchedPasswords.password,
            users.mismatchedPasswords.confirmPassword
        );

        await expect(SignupPage.mismatchedPasswordMessage).toBeDisplayed();

    });

});
