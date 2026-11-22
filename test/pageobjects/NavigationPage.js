
class NavigationPage {

    get homeTab() {
        return $('~Home');
    }

    get webviewTab() {
        return $('~Webview');
    }

    get loginTab() {
        return $('~Login');
    }

    get formsTab() {
        return $('~Forms');
    }

    get swipeTab() {
        return $('~Swipe');
    }

    get dragTab() {
        return $('~Drag');
    }

    get menuTab() {
        return $('~Menu');

    }
    get permissionsStar() {
        return $('~side-menu-star-permissions');
    }

    get dragStar() {
        return $('~side-menu-star-drag');
    }


    async openHome() {
        await this.homeTab.click();
    }

    async openWebview() {
        await this.webviewTab.click();
    }

    async openLogin() {
        await this.loginTab.click();
    }

    async openForms() {
        await this.formsTab.click();
    }

    async openSwipe() {
        await this.swipeTab.click();
    }

    async openDrag() {
        await this.dragTab.click();
    }
    async openMenu() {
        await this.menuTab.click();
    }



}

export default new NavigationPage();
