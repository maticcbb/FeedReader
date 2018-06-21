function MenuCheck() {
    this.menu_element = document.getElementsByTagName('body')[0];
    this.menu_checked = false;
    this.toggle = function () {
        $('body').toggleClass('menu-hidden');
    };
    
}

MenuCheck.prototype.menuVisibility = function () {
    if (this.menu_element.className == 'menu-hidden') {
        this.menu_checked = true;
    }
}


