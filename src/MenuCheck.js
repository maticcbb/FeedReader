function MenuCheck () { 
    this.menu_element = document.getElementsByTagName('body')[0];
    this.menu_checked = false ;
    this.toggle = function () {
        $('body').toggleClass('menu-hidden');
    };
    this.hidden_checked = false;
    this.visible_checked = false; 
}

MenuCheck.prototype.menuVisibility = function () {
    if(this.menu_element.className == 'menu-hidden') {
        this.menu_checked = true;
    }
}

MenuCheck.prototype.menuShow = function () {
    
    if(this.menu_element.className != 'menu-hidden') {
        this.visible_checked = true; 
        this.toggle();
         
    }
   
}

 MenuCheck.prototype.menuHide = function () {

     if (this.menu_element.className == 'menu-hidden') {
         this.hidden_checked = true;
         this.toggle();
     }
 }