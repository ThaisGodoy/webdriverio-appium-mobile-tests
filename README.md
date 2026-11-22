#  Automação de Testes Mobile — WebdriverIO + Appium

##  Sobre o projeto

Projeto de automação de testes End-to-End (E2E) desenvolvido com JavaScript, WebdriverIO e Appium, utilizando o aplicativo Native Demo App.

O objetivo é automatizar e validar funcionalidades de login, cadastro, navegação e formulários nas plataformas **Android e iOS**, aplicando boas práticas de automação, reutilização de código e organização dos testes.

O projeto utiliza o padrão **Page Object Model (POM)**, massa de dados externa e relatórios Allure para acompanhamento dos resultados e análise de falhas.

## Tecnologias utilizadas

| Tecnologia | Finalidade |

| JavaScript | Linguagem de programação |
| WebdriverIO | Framework de automação |
| Appium | Automação mobile |
| Mocha | Framework de testes |
| WebdriverIO Expect | Assertions |
| Page Object Model | Organização e reutilização de código |
| Allure Report | Relatórios e evidências |
| Android Studio | Emulador Android |
| Xcode | Simulador iOS |
| Node.js / npm | Ambiente e dependências |
| Git | Controle de versão |

## Estrutura do projeto


webdriverio-appium-mobile-tests/
├── test/
│   ├── data/
│   │   └── users.json
│   ├── pageobjects/
│   │   ├── LoginPage.js
│   │   ├── SignupPage.js
│   │   ├── NavigationPage.js
│   │   └── FormsPage.js
│   └── specs/
│       ├── login.spec.js
│       ├── signup.spec.js
│       ├── navigation.spec.js
│       └── forms.spec.js
├── allure-results/
│   ├── android/
│   └── ios/
├── logs/
│   ├── android/
│   └── ios/
├── wdio.android.conf.js
├── wdio.ios.conf.js
├── package.json
└── README.md


As pastas de resultados e logs são geradas durante as execuções.

##  Cenários automatizados

Foram implementados 10 cenários, executáveis nas duas plataformas.

| ID | Cenário |
|---|---|
| CT01 | Login com credenciais válidas |
| CT02 | Validação de senha com menos de 8 caracteres |
| CT03 | Validação de campos obrigatórios |
| CT04 | Cadastro válido seguido de login |
| CT05 | Cadastro com dados inválidos |
| CT06 | Cadastro com senhas diferentes |
| CT07 | Navegação entre telas |
| CT08 | Validação de navegação entre abas |
| CT09 | Preenchimento e validação de campo de texto |
| CT10 | Validação de Switch, Dropdown e botão Active |

### Cobertura funcional

- Login positivo e negativo
- Validação de campos obrigatórios
- Cadastro e validações de formulário
- Navegação entre telas
- Interação com componentes nativos
- Validação de mensagens e resultados esperados

## Pré-requisitos

Para executar o projeto localmente:

- Node.js e npm
- Java JDK 17
- Appium 2
- Driver UiAutomator2 para Android
- Driver XCUITest para iOS
- Android Studio e emulador configurado
- Xcode e simulador iOS configurado
- macOS para execução dos testes iOS

Os dispositivos e aplicativos devem estar configurados conforme as capabilities dos arquivos WebdriverIO.

## 🚀 Instalação

Clone o repositório:

git clone <URL_DO_REPOSITORIO>

Entre na pasta:

cd webdriverio-appium-mobile-tests

Instale as dependências:

npm install

Verifique o Appium:

npx appium --version

Confira os drivers instalados:

npx appium driver list --installed
## Aplicativos para execução dos testes

Os testes utilizam o aplicativo **WebdriverIO Native Demo App**, disponível no repositório oficial:

https://github.com/webdriverio/native-demo-app

Os binários Android e iOS não estão incluídos neste repositório.

Para executar os testes:

1. Obtenha o aplicativo no repositório oficial.
2. Instale o aplicativo no emulador Android ou simulador iOS.
3. Configure o dispositivo nas capabilities dos arquivos `wdio.android.conf.js` e `wdio.ios.conf.js`.
4. Inicie o Appium e execute os testes conforme as instruções deste README.

**Identificadores dos aplicativos:**
- Android: `com.wdiodemoapp`
- iOS: `org.wdiodemoapp`

**Observação:** os identificadores dos dispositivos (UDIDs) devem ser ajustados conforme o ambiente utilizado.

## Execução dos testes

### Android

Inicie o emulador Android configurado e execute:

npx wdio run ./wdio.android.conf.js

### iOS

Inicie o simulador iOS configurado e execute:

npx wdio run ./wdio.ios.conf.js

### Executar somente uma funcionalidade

Exemplo: testes de login no Android.

npx wdio run ./wdio.android.conf.js --spec ./test/specs/login.spec.js

### Executar um cenário específico

Exemplo: CT10 no iOS.

npx wdio run ./wdio.ios.conf.js --spec ./test/specs/forms.spec.js --mochaOpts.grep "CT10"

## Relatórios Allure

O projeto utiliza **Allure Report 2** para geração e visualização dos resultados automatizados.

O relatório apresenta:

- Resumo dos testes executados
- Quantidade de testes aprovados e reprovados
- Tempo de execução
- Organização por suítes
- Passos executados pelo WebDriver
- Informações do ambiente
- Evidências de falhas

### Relatório Android

npx allure serve ./allure-results/android --port 5050
### Relatório iOS

npx allure serve ./allure-results/ios --port 5051

Os relatórios são gerados a partir dos resultados armazenados em cada diretório.

### Gerar relatório estático

Android:

npx allure generate ./allure-results/android --clean -o ./allure-report/android

iOS:

npx allure generate ./allure-results/ios --clean -o ./allure-report/ios

## Screenshots automáticos

Foi configurado o hook `afterTest` do WebdriverIO para capturar automaticamente screenshots quando um cenário falhar.

afterTest: async function (test, context, { passed }) {
    if (!passed) {
        await browser.takeScreenshot();
    }
},

## Logs de execução

O WebdriverIO está configurado para gerar logs em diretórios separados:

logs/
├── android/
└── ios/


## Informações do ambiente

Os relatórios Allure incluem informações configuradas no arquivo `environment.properties`, como:

- Plataforma: Android ou iOS
- Framework: WebdriverIO
- Ferramenta de automação: Appium
- Linguagem: JavaScript
- Test Runner: Mocha
- Tipo de dispositivo: emulador ou simulador

Essas informações são registradas por meio do hook `onPrepare` nas configurações de execução.

##  Arquitetura e boas práticas

O projeto utiliza **Page Object Model (POM)** para separar os cenários de teste das interações com os elementos da aplicação.

Foram aplicadas as seguintes práticas:

- Organização dos testes por funcionalidade
- Centralização de seletores nos Page Objects
- Reutilização de métodos
- Separação de dados de teste em JSON
- Esperas explícitas para sincronização
- Assertions para validação dos resultados
- Tratamento das diferenças entre Android e iOS
- Configurações independentes para cada plataforma
- Captura automática de evidências em falhas

##  Resultados

Foram implementados e executados 10 cenários automatizados em Android e iOS.

As execuções completas validadas apresentaram **100% de aprovação em cada plataforma**, totalizando 20 execuções de cenários aprovadas.

O projeto também conta com relatórios Allure e captura automática de screenshots em falhas.
