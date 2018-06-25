function MenuCheck() {
    this.menu_element = document.getElementsByTagName('body')[0]; //gets body element
    this.menu_checked = false; //checking variable
    this.toggle = function () {     // methode that toggle the menu button
        $('body').toggleClass('menu-hidden');
    };
    
}



