let menuLink = Array.from(document.getElementsByClassName("menu__link"));

for(let i = 0; menuLink.length > i; i++) {

    menuLink[i].onclick = function() {

        subMenu = this.parentElement.querySelector("ul");

        if(subMenu.className === 'menu menu_sub') {
            subMenu.className = 'menu menu_sub menu_active';
            return false;
            
        } else if(subMenu.className === 'menu menu_sub menu_active') {
          subMenu.className = 'menu menu_sub';
          return false;
        }
    }
}

