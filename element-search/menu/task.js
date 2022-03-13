let menuLink = Array.from(document.getElementsByClassName("menu__link"));

for(let i = 0; menuLink.length > i; i++) {

    menuLink[i].onclick = function() {

        subMenu = this.parentElement.querySelector("ul");

        if(subMenu.className === 'menu menu_sub menu_active') {
          this.closest.querySelector("a").onclick = function() {
          subMenu.className = 'menu menu_sub';
            } //function
        } //if

        if(subMenu) {
            subMenu.className = 'menu menu_sub menu_active';
            return false;
        } //if
    } //onclick
} //for

